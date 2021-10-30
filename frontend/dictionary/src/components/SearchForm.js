import React from "react";

let SearchForm = ({ searchID, handleIDChange, newID }) => {
  return (
    <div>
      <h2>Search by ID</h2>
      <form onSubmit={searchID}>
        <div>
          ID:{" "}
          <input class="searchbar" onChange={handleIDChange} value={newID} />
        </div>
        <div>
          <button type="submit">find</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
