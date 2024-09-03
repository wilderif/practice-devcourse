import { useState } from "react";
import InputEl from "./InputEl.jsx";
import SelectEl from "./SelectEl.jsx";
import { isKoreanName, isPhoneNumber } from "../../util/validation.js";

const InputCon = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [group, setGroup] = useState("가족");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const handleReset = () => {
    setName("");
    setPhone("");
    setGroup("가족");
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
      console.log("Form Submitted:", { name, phone, group, note });
      handleReset();
    }
  };

  return (
    <form className="input-container" onSubmit={(event) => handleSubmit(event)}>
      <InputEl
        inputType={"이름"}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div className="control-error">{errors.name && <p>{errors.name}</p>}</div>
      <InputEl
        inputType={"전화번호"}
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <div className="control-error">
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <SelectEl
        value={group}
        onChange={(event) => setGroup(event.target.value)}
      />
      <InputEl
        inputType={"간단한 기록"}
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <button type="submit">저장</button>
    </form>
  );
};

export default InputCon;
