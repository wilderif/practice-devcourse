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
  return JSON.parse(localStorage.getItem("contactList")) || [];
};

// 연락처를 로컬 스토리지에서 제거하는 함수
export const removeContactFromLocalStorage = (phone) => {
  const prevContacts = JSON.parse(localStorage.getItem("contactList")) || [];

  // 주어진 전화번호와 일치하지 않는 연락처만 필터링
  const newContacts = prevContacts.filter((contact) => contact.phone !== phone);

  // 업데이트된 연락처 리스트를 다시 로컬 스토리지에 저장
  localStorage.setItem("contactList", JSON.stringify(newContacts));
};
