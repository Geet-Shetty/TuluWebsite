import React from "react";

let Meanings = ({ meanings }) => {
  // console.log(meanings);
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
          <sup>{data.id}</sup>
          {data.tulu} ({data.english})
        </a>
      );
    }

    let definitions_pairs = [];
    section.definitions.forEach((definition) => {
      // let k_list = definition.kannada.map((item) => item + "; ");
      // k_list[k_list.length - 1] = k_list[k_list.length - 1].substring(
      //   0,
      //   k_list[k_list.length - 1].length - 2
      // );

      // let e_list = definition.english.map((item) => item + "; ");
      // e_list[k_list.length - 1] = e_list[e_list.length - 1].substring(
      //   0,
      //   e_list[e_list.length - 1].length - 2
      // );
      console.log(definition.kannada.map((item) => item + "; "));
      definitions_pairs.push(
        <>
          {/* <tr>
            <td>{k_list}</td>
            <td>{e_list}</td>
          </tr> */}
          <tr>
            <td>{definition.kannada}</td>
            <td>{definition.english}</td>
          </tr>
          <tr>
            <td>{definition.kannada.map((item) => item + "; ")}</td>
            <td>{definition.english.map((item) => item + "; ")}</td>
          </tr>
        </>
      );
    });

    sections.push(
      <>
        <tr>
          {section_header} {linked_word}
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
      <h2>Meanings</h2>
      <table>{sections}</table>
    </>
  );
};

export default Meanings;
