import "../../assets/css/styles-kompetisi.css";

const Search = ({ text }) => {
  return (
    <input
      type="text"
      className="form-control form-input w-full"
      placeholder={text}
      id="search-icon"
    />
  );
};

export default Search;
