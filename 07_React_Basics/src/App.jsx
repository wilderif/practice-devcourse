import { useState } from "react";
import InputCon from "./components/input_area/InputCon.jsx";
import ListArea from "./components/list_area/ListArea.jsx";

function App() {
  return (
    <>
      <h1>연락처 리스트</h1>
      <div className="app-container">
        <InputCon />
        <ListArea />
      </div>
    </>
  );
}

export default App;
