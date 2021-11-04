import React from "react";

let References = ({ references }) => {
  if (references !== undefined) {
    let sections = [];
    references.forEach((section) => {
      if (section !== undefined) {
        let section_header = section.reference;
        let sentences = [];
        section.sentences.forEach((sentence) => {
          sentences.push(
            <>
              <tr>
                <td>{sentence.tulu}</td>
                <td>{sentence.english}</td>
                <td>{sentence.kannada}</td>
              </tr>
            </>
          );
        });

        if (sentences.length !== 0) {
          sections.push(
            <>
              <tr>
                <th colSpan={3} class="section_subheader">
                  {section_header}
                </th>
              </tr>
              {sentences}
            </>
          );
        }
      } else {
        return <></>;
      }
    });
    return (
      <>
        {sections.length ? (
          <div id="references">
            <h2 class="section_header">References</h2> <table>{sections}</table>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return <></>;
  }
};

export default References;
