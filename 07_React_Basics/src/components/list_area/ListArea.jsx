import SearchCon from "./SearchCon.jsx";
import List from "./List.jsx";

const ListArea = () => {
  return (
    <div className="list-area">
      <SearchCon />
      <ul>
        <List></List>
      </ul>
    </div>
  );
};

export default ListArea;
