const InputEl = ({ inputType }) => {
  return (
    <div className="input-element">
      <p>{inputType}</p>
      <input type="text" placeholder={inputType} />
    </div>
  );
};

export default InputEl;
