import { useState, useEffect } from "react";

import SearchCon from "./SearchCon.jsx";
import List from "./List.jsx";

import { getContactsFromLocalStorage } from "../../util/storage.js";

const ListArea = () => {
  const [contacts, setContacts] = useState([]);

  const updateContacts = () => {
    const storedContacts = getContactsFromLocalStorage();
    setContacts(storedContacts);
  };

  useEffect(() => {
    updateContacts();
  }, []);

  return (
    <div className="list-area">
      <SearchCon handleUpdate={updateContacts} />
      <ul>
        {contacts.map((contact, index) => {
          return (
            <List
              key={index}
              contact={contact}
              onDelete={updateContacts}
            ></List>
          );
        })}
      </ul>
    </div>
  );
};

export default ListArea;
