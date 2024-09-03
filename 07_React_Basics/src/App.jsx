import { useState } from "react";
import InputCon from "./components/input_area/InputCon.jsx";
import ListArea from "./components/list_area/ListArea.jsx";

function App() {
  return (
    <div className="app-container">
      <InputCon />
      <ListArea />
    </div>
  );
}

export default App;
