import React from "react";

let LanguageRefs = ({ language_refs }) => {
  if (language_refs === undefined || language_refs === "") {
    return <></>;
  } else {
    return (
      <div id="language_references">
        <h2 className="section_header">Language References</h2>
        <table>
          <tbody>
            <th>{language_refs}</th>
          </tbody>
        </table>
      </div>
    );
  }
};

export default LanguageRefs;
