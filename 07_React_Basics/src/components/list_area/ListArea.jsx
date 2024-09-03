import { useState, useEffect } from "react";

import SearchCon from "./SearchCon.jsx";
import List from "./List.jsx";

import { getContactsFromLocalStorage } from "../../util/storage.js";

const ListArea = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // 유틸리티 함수를 사용하여 로컬 스토리지에서 연락처 데이터를 가져옴
    const storedContacts = getContactsFromLocalStorage();
    setContacts(storedContacts);
  }, []);

  console.log(contacts);

  return (
    <div className="list-area">
      <SearchCon />
      <ul>
        {contacts.map((contact, index) => {
          return <List key={index} contact={contact}></List>;
        })}
      </ul>
    </div>
  );
};

export default ListArea;
