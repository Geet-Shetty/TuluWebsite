import React from "react";

let Examples = ({ examples }) => {
  if (examples !== undefined && examples.length > 0) {
    let list = [];
    examples.forEach((example) => {
      list.push(
        <tr>
          <td>{example}</td>
        </tr>
      );
    });
    return (
      <div id="examples">
        <h2 className="section_header">Examples</h2>
        <table>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Examples;
