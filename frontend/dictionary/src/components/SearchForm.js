import React from "react";

let SearchForm = ({ searchID, handleIDChange, newVal }) => {
  return (
    <div class="searchbox">
      <form onSubmit={searchID}>
        <input class="searchbar" onChange={handleIDChange} value={newVal} />
        <button type="submit">find</button>
      </form>
    </div>
  );
};

export default SearchForm;
