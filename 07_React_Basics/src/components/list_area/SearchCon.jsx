const SearchCon = ({ handleUpdate }) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="검색어를 입력 후 엔터를 누르세요" />
      <button onClick={handleUpdate}>전체리스트 보기</button>
    </div>
  );
};

export default SearchCon;
