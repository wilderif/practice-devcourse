const SelectEl = () => {
  return (
    <div className="input-element">
      <p>그룹</p>
      <div className="select-element">
        <select>
          <option>가족</option>
          <option>친구</option>
          <option>직장</option>
          <option>스터디</option>
        </select>
        <button>조직 추가</button>
      </div>
    </div>
  );
};

export default SelectEl;
