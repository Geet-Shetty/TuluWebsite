import React from "react";
import WordHeader from "./WordHeader";
import Meanings from "./Meanings";
import Variations from "./Variations";
import References from "./References";
import LanguageRefs from "./LanguageRefs";
import Examples from "./Examples";

let Display = ({ word }) => {
  return (
    <div class="tulu middle">
      <WordHeader word={word.word} />
      <Meanings meanings={word.meanings} />
      <Variations variations={word.variations} />
      <References references={word.references} />
      <Examples examples={word.examples} />
      <LanguageRefs language_refs={word.language_refs} />
    </div>
  );
};

export default Display;
