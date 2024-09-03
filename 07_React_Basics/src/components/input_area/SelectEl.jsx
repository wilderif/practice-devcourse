import React from "react";

// group정보를 localStorage에서 가져와서 사용하도록 수정
const SelectEl = ({ value, onChange, onAddGroup }) => {
  return (
    <div className="input-element">
      <label htmlFor="group-select">그룹</label>
      <div className="select-element">
        <select id="group-select" value={value} onChange={onChange}>
          <option value="가족">가족</option>
          <option value="친구">친구</option>
          <option value="직장">직장</option>
          <option value="스터디">스터디</option>
        </select>
        <button type="button" onClick={onAddGroup}>
          조직 추가
        </button>
      </div>
    </div>
  );
};

export default SelectEl;
