import React from "react";

let SearchForm = ({ searchID, handleIDChange, newID }) => {
  return (
    <>
      <h2>Search by ID</h2>
      <form onSubmit={searchID}>
        <div>
          ID: <input onChange={handleIDChange} value={newID} />
        </div>
        <div>
          <button type="submit">find</button>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
