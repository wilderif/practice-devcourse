import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  addGroupToLocalStorage,
  removeGroupFromLocalStorage,
} from "../../util/storage.js";

const GroupModal = ({
  isModalOpen,
  setIsModalOpen,
  onClose,
  groups,
  setGroups,
}) => {
  const dialogRef = useRef();
  const [newGroupInput, SetNewGroupInput] = useState();

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isModalOpen]);

  const handleAddGroup = (group) => {
    const updatedGroups = addGroupToLocalStorage(group);

    setGroups(updatedGroups);
  };

  const handleRemoveGroup = (group) => {
    const updatedGroups = removeGroupFromLocalStorage(group);

    setGroups(updatedGroups);
  };

  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      <button onClick={() => setIsModalOpen(false)}>X</button>
      <h2>그룹 관리</h2>
      <ul>
        {groups.map((group, index) => {
          return (
            <li className="group" key={index}>
              {group}{" "}
              <button onClick={() => handleRemoveGroup(group)}>X</button>
            </li>
          );
        })}
      </ul>
      <div>
        <input
          type="text"
          onChange={(event) => {
            SetNewGroupInput(event.target.value);
          }}
        />
        <button onClick={() => handleAddGroup(newGroupInput)}>추가</button>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default GroupModal;
