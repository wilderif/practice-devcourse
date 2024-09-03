import { useState, useEffect } from "react";

import SearchCon from "./SearchCon.jsx";
import List from "./List.jsx";
import DetailModal from "./DetailModal.jsx";

import { getContactsFromLocalStorage } from "../../util/storage.js";

const ListArea = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({
    name: "",
    phone: "",
    group: "",
    note: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickDetail = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const updateContacts = () => {
    const storedContacts = getContactsFromLocalStorage();
    setContacts(storedContacts);
  };

  useEffect(() => {
    updateContacts();
  }, []);

  return (
    <>
      {isModalOpen && (
        <DetailModal
          onClose={() => setIsModalOpen(false)}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          contact={selectedContact}
        ></DetailModal>
      )}
      <div className="list-area">
        <SearchCon handleUpdate={updateContacts} />
        <ul>
          {contacts.map((contact, index) => {
            return (
              <List
                key={index}
                contact={contact}
                onDelete={updateContacts}
                onClickDetail={() => handleClickDetail(contact)}
              ></List>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ListArea;
