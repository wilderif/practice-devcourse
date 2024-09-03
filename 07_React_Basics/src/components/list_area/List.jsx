const List = ({ contact }) => {
  return (
    <li>
      <div>
        {contact.name} {contact.phone} {contact.group}
      </div>
      <div>
        <button>세부사항</button>
        <button>삭제</button>
      </div>
    </li>
  );
};

export default List;
