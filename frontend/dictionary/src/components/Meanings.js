import React from "react";

// add checks to only do things if they are not null/undefined
let Meanings = ({ meanings }) => {
  if (meanings !== undefined) {
    let sections = [];
    meanings.forEach((section) => {
      let keys = Object.keys(section);
      // console.log(keys);

      let section_header = "";
      let linked_word = <></>;
      if (keys.includes("contexts") && section.contexts.length !== 0) {
        let i = 0;
        for (; i < section.contexts.length - 1; i++) {
          console.log(section_header);
          section_header += section.contexts[i] + ", ";
        }
        section_header += section.contexts[i];
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
            {data.id === 0 ? "" : <sup>{data.id}</sup>}
            {data.tulu} ({data.english})
          </a>
        );
      }

      let definitions_pairs = [];
      section.definitions.forEach((definition) => {
        console.log(definition.kannada.map((item) => item + "; "));
        let split_k = definition.kannada.map((item) => item + "; ");
        let split_e = definition.english.map((item) => item + "; ");
        let k_string = "";
        for (let i = 0; i < split_k.length - 1; i++) {
          k_string += split_k[i];
        }
        let last_string = split_k[split_k.length - 1];
        if (last_string !== undefined) {
          k_string += last_string.substring(0, last_string.length - 2);
        }

        let e_string = "";
        for (let i = 0; i < split_e.length - 1; i++) {
          e_string += split_e[i];
        }
        last_string = split_e[split_e.length - 1];
        if (last_string !== undefined) {
          e_string += last_string.substring(0, last_string.length - 2);
        }
        definitions_pairs.push(
          <>
            <tr>
              <td class="kannada">{k_string}</td>
              <td class="english">{e_string}</td>
            </tr>
            {/* <tr>
            <td>{definition.kannada}</td>
            <td>{definition.english}</td>
          </tr> */}
            {/* <tr>
            <td>{definition.kannada.map((item) => item + "; ")}</td>
            <td>{definition.english.map((item) => item + "; ")}</td>
          </tr> */}
          </>
        );
      });

      sections.push(
        <>
          <tr>
            <td colSpan={3} class="section_subheader thick">
              {section_header} {linked_word}
            </td>
          </tr>
          {definitions_pairs}
          {/* <tr>
          <p class="one_line">test1</p>
          <p class="one_line">test</p>
        </tr> */}
        </>
      );
    });
    return (
      <>
        <h2 class="section_header">Meanings</h2>
        <table>{sections}</table>
      </>
    );
  } else {
    return <></>;
  }
};

export default Meanings;
