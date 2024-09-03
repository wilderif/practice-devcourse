const InputEl = ({ inputType, value, onChange }) => {
  return (
    <div className="input-element">
      <label>{inputType}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={inputType}
      />
    </div>
  );
};

export default InputEl;
