import "../styles/SearchInput.css";

function SearchInput({ searchTerm, setSearchTerm }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <form>
      <label htmlFor="breedsearch">Search for a breed</label>
      <input
        value={searchTerm}
        onChange={handleChange}
        name="breedsearch"
        type="text"
      />
    </form>
  );
}

export default SearchInput;
