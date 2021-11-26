import React from "react";

let SearchType = ({ handleModeChange, newMode }) => {
  return (
    <>
      {/* <form onSubmit={null}> */}
      <form>
        <label>
          <select value={newMode} onChange={handleModeChange}>
            <option value="english">English</option>
            <option value="tulu">Tulu</option>
            <option value="id">ID</option>
          </select>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </>
  );
};

export default SearchType;
