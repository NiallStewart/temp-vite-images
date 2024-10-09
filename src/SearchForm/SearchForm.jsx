import { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { searchValue, setSearchValue } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    const searchTerm = e.target.elements.search.value;
    setSearchValue(searchTerm);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input form-input"
          type="text"
          name="search"
          placeholder="Cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
