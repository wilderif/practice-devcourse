// group정보를 localStorage에서 가져와서 사용하도록 수정
const SelectEl = ({ onChange, onClickButton, groups, selectedGroup }) => {
  const handleSelectChange = (event) => {
    const newGroup = event.target.value;
    onChange(newGroup);
  };

  return (
    <div className="input-element">
      <label htmlFor="group-select">그룹</label>
      <div className="select-element">
        <select
          id="group-select"
          value={selectedGroup}
          onChange={handleSelectChange}
        >
          {groups.map((group, index) => {
            return (
              <option key={index} value={group}>
                {group}
              </option>
            );
          })}
        </select>
        <button type="button" onClick={onClickButton}>
          조직 추가
        </button>
      </div>
    </div>
  );
};

export default SelectEl;
