import { useSearchParams } from "react-router-dom";

const Search = ({ handleInputChange, handleSearch, searchValue }) => {
  return (
    <div className="flex px-2 py-8">
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        placeholder="Enter name here....."
        value={searchValue}
        onKeyDown={handleSearch}
        onChange={handleInputChange}
        className="border-2 border-gray-600 w-80 px-2 py-2 rounded-md placeholder:text-lg placeholder:font-medium"
      />
    </div>
  );
};
export default Search;
