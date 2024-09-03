import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const GroupModal = ({ isModalOpen, onClose }) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isModalOpen]);

  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      <h2>그룹 관리</h2>
      <ul>
        <li></li>
      </ul>
      <div>
        <input type="text" />
        <button>추가</button>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default GroupModal;
