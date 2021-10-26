import React from "react";

let WordHeader = ({ word }) => {
  console.table(word.word);
  let id = word.word.id ? <sup>{word.word.id}</sup> : <></>;
  let tulu = word.word.tulu ? (
    <tr>
      <th>Tulu</th>
      <td class="tulu">
        {id}
        {word.word.tulu}
      </td>
    </tr>
  ) : (
    <></>
  );

  let english = word.word.english ? (
    <tr>
      <th>English</th>
      <td class="english">{word.word.english}</td>
    </tr>
  ) : (
    <></>
  );

  let origin = word.word.origin ? (
    <tr>
      <th>Origin</th>
      <td>{word.word.origin}</td>
    </tr>
  ) : (
    <></>
  );
  return (
    <>
      <table>
        {tulu}
        {english}
        {origin}
      </table>
    </>
  );
};

export default WordHeader;
