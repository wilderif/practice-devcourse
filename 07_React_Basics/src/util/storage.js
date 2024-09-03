export const saveContactToLocalStorage = (name, phone, group, note) => {
  const existingContacts =
    JSON.parse(localStorage.getItem("contactList")) || [];

  const newContact = { name, phone, group, note };
  const updatedContacts = [...existingContacts, newContact];

  localStorage.setItem("contactList", JSON.stringify(updatedContacts));
};

export const getContactsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("contactList")) || [];
};

export const removeContactFromLocalStorage = (phone) => {
  const prevContacts = JSON.parse(localStorage.getItem("contactList")) || [];

  const newContacts = prevContacts.filter((contact) => contact.phone !== phone);

  localStorage.setItem("contactList", JSON.stringify(newContacts));
};

export const getGroupsFromLocalStorage = () => {
  const groups = JSON.parse(localStorage.getItem("groups"));

  if (!groups) {
    const defaultGroups = ["가족", "친구", "직장", "스터디"];
    localStorage.setItem("groups", JSON.stringify(defaultGroups));
    return defaultGroups;
  }

  return groups;
};

export const addGroupToLocalStorage = (newGroup) => {
  const groups = JSON.parse(localStorage.getItem("groups")) || [];
  const updatedGroups = [...groups, newGroup];
  localStorage.setItem("groups", JSON.stringify(updatedGroups));

  return updatedGroups;
};

export const removeGroupFromLocalStorage = (groupToRemove) => {
  const groups = JSON.parse(localStorage.getItem("groups")) || [];
  const updatedGroups = groups.filter((group) => group !== groupToRemove);
  localStorage.setItem("groups", JSON.stringify(updatedGroups));

  return updatedGroups;
};
