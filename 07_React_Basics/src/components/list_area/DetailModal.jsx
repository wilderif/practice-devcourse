import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const DetailModal = ({ isModalOpen, setIsModalOpen, onClose, contact }) => {
  const dialogRef = useRef();

  console.log(contact);

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isModalOpen]);

  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      <div className="detail-modal">
        <button onClick={() => setIsModalOpen(false)}>X</button>
        <h2>연락처 상세 정보</h2>
        <p>이름: {contact.name}</p>
        <p>전화번호: {contact.phone}</p>
        <p>그룹: {contact.group}</p>
        <p>메모: {contact.note}</p>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default DetailModal;
