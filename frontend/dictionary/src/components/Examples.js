import React from "react";

let Examples = ({ examples }) => {
  if (examples !== undefined && examples.length > 0) {
    let list = [];
    examples.forEach((example) => {
      list.push(<li>{example}</li>);
    });
    return (
      <div id="examples">
        <h2 class="section_header">Examples</h2>
        <ol>{list}</ol>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Examples;
