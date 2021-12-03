import React from "react";
import Word from "./Word";

// add checks to only do things if they are not null/undefined
let Meanings = ({ meanings }) => {
  if (meanings !== undefined) {
    let sections = [];
    meanings.forEach((section) => {
      let keys = Object.keys(section);

      let section_header = "";
      let linked_word = <></>;
      if (keys.includes("contexts") && section.contexts.length !== 0) {
        let i = 0;
        for (; i < section.contexts.length - 1; i++) {
          section_header += section.contexts[i] + ", ";
        }
        section_header += section.contexts[i];
      } else {
        section_header = undefined;
      }

      if (
        keys.includes("linked_context") &&
        section.linked_context.length !== 0
      ) {
        let data = section.linked_context;
        if (section_header === undefined || section_header.length === 0) {
          section_header = data.context + " of ";
        } else {
          section_header += ", " + data.context + " of ";
        }
        linked_word = (
          <a href="" onclick="">
            <Word word={data} />
          </a>
        );
      } else {
        linked_word = undefined;
      }

      let definitions_pairs = [];
      section.definitions.forEach((definition) => {
        let def_keys = Object.keys(definition);

        let last_string = "";
        let k_string = "";
        if (def_keys.includes("kannada")) {
          k_string = "";
          let split_k = definition.kannada.map((item) => item + "; ");
          for (let i = 0; i < split_k.length - 1; i++) {
            k_string += split_k[i];
          }
          last_string = split_k[split_k.length - 1];
          if (last_string !== undefined) {
            k_string += last_string.substring(0, last_string.length - 2);
          }
        }

        let e_string = "";
        if (def_keys.includes("english")) {
          let split_e = definition.english.map((item) => item + "; ");

          e_string = "";
          for (let i = 0; i < split_e.length - 1; i++) {
            e_string += split_e[i];
          }
          last_string = split_e[split_e.length - 1];
          if (last_string !== undefined) {
            e_string += last_string.substring(0, last_string.length - 2);
          }
        }

        definitions_pairs.push(
          <>
            <tr>
              {k_string.length > 0 ? (
                <td className="kannada">{k_string}</td>
              ) : (
                <></>
              )}
              {e_string.length > 0 ? (
                <td className="english">{e_string}</td>
              ) : (
                <></>
              )}
            </tr>
          </>
        );
      });

      sections.push(
        <>
          {section_header === undefined && linked_word === undefined ? (
            <></>
          ) : (
            <tr>
              <th colSpan={3} class="section_subheader">
                {section_header} {linked_word}
              </th>
            </tr>
          )}
          {definitions_pairs}
        </>
      );
    });
    return (
      <div id="meanings">
        <h2 className="section_header">Meanings</h2>
        <table>
          <tbody>{sections}</tbody>
        </table>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Meanings;
