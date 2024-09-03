const SearchCon = ({ handleUpdate }) => {
  return (
    <div className="search-container">
      <input type="text" />
      <button onClick={handleUpdate}>전체리스트 보기</button>
    </div>
  );
};

export default SearchCon;
