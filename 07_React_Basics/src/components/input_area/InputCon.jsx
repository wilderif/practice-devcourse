import { useEffect, useState } from "react";

import InputEl from "./InputEl.jsx";
import SelectEl from "./SelectEl.jsx";
import GroupModal from "./GroupModal.jsx";

import { isKoreanName, isPhoneNumber } from "../../util/validation.js";
import {
  saveContactToLocalStorage,
  getGroupsFromLocalStorage,
} from "../../util/storage.js";

const InputCon = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const newGroups = getGroupsFromLocalStorage();
    setGroups(newGroups);
  }, []);

  const handleReset = () => {
    setName("");
    setPhone("");
    setSelectedGroup(groups[0]);
    setNote("");
    setErrors({
      name: "",
      phone: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formIsValid = true;
    let newErrors = { name: "", phone: "" };

    if (!isKoreanName(name, 2)) {
      newErrors.name = "이름은 한글로 두 글자 이상 입력해주세요.";
      formIsValid = false;
    }

    if (!isPhoneNumber(phone)) {
      newErrors.phone = "전화번호는 010-0000-0000 형식으로 입력해주세요.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      saveContactToLocalStorage(name, phone, selectedGroup, note);
      handleReset();
    }
  };

  return (
    <>
      {isModalOpen && (
        <GroupModal
          onClose={() => setIsModalOpen(false)}
          isModalOpen={isModalOpen}
        ></GroupModal>
      )}

      <form
        className="input-container"
        onSubmit={(event) => handleSubmit(event)}
      >
        <InputEl
          inputType={"이름"}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <div className="control-error">
          {errors.name && <p>{errors.name}</p>}
        </div>
        <InputEl
          inputType={"전화번호"}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <div className="control-error">
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <SelectEl
          selectedGroup={selectedGroup}
          groups={groups}
          onChange={(event) => {
            setSelectedGroup(event.target.value);
          }}
          onClickButton={() => setIsModalOpen(true)}
        />
        <InputEl
          inputType={"간단한 기록"}
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />
        <button type="submit">저장</button>
      </form>
    </>
  );
};

export default InputCon;
