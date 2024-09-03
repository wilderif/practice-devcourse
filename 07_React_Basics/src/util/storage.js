export const saveContactToLocalStorage = (name, phone, group, note) => {
  // 현재 저장된 contactList를 불러옴 (없으면 빈 배열)
  const existingContacts =
    JSON.parse(localStorage.getItem("contactList")) || [];

  // 새로운 연락처를 추가
  const newContact = { name, phone, group, note };
  const updatedContacts = [...existingContacts, newContact];

  // updatedContacts를 다시 localStorage에 저장
  localStorage.setItem("contactList", JSON.stringify(updatedContacts));
};

// 그룹 업데이트 로직 추가할 것

export const getContactsFromLocalStorage = () => {
  // 로컬 스토리지에서 'contactList' 데이터를 가져옴 (없으면 빈 배열 반환)
  return JSON.parse(localStorage.getItem("contactList")) || [];
};
