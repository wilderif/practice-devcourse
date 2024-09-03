import InputEl from "./InputEl.jsx";
import SelectEl from "./SelectEl.jsx";

const InputCon = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="input-container">
      <InputEl inputType={"이름"} />
      <InputEl inputType={"전화번호"} />
      <SelectEl />
      <InputEl inputType={"간단한 기록"} />
      <button>저장</button>
    </form>
  );
};

export default InputCon;
