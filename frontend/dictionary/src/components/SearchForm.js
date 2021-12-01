import React from "react";

let SearchForm = ({ searchID, handleIDChange, newVal }) => {
  return (
    <div className="searchbox">
      <form onSubmit={searchID}>
        <input
          className="searchbar tulu_font"
          onChange={handleIDChange}
          value={newVal}
        />
        <button type="submit">find</button>
      </form>
    </div>
  );
};

export default SearchForm;
