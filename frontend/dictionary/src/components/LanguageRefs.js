import React from "react";

let LanguageRefs = ({ language_refs }) => {
  if (language_refs === undefined || language_refs === "") {
    return <></>;
  } else {
    return (
      <div id="language_references">
        <h2 class="section_header">Language References</h2>
        <table>
          <th>{language_refs}</th>
        </table>
      </div>
    );
  }
};

export default LanguageRefs;
