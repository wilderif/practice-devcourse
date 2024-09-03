import { removeContactFromLocalStorage } from "../../util/storage.js";

const List = ({ contact, onDelete, onClickDetail }) => {
  const handleDelete = () => {
    removeContactFromLocalStorage(contact.phone);
    onDelete();
  };

  return (
    <li>
      <div>
        {contact.name} {contact.phone} {contact.group}
      </div>
      <div>
        <button
          onClick={() => {
            onClickDetail(contact);
          }}
        >
          세부사항
        </button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </li>
  );
};

export default List;
