import React from "react";
import WordHeader from "./WordHeader";
import Meanings from "./Meanings";
import Variations from "./Variations";
import References from "./References";
import LanguageRefs from "./LanguageRefs";
import Examples from "./Examples";

import wordService from "../services/word";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

let Display = () => {
  let params = useParams();

  let empty_word = {
    word: undefined,
    meanings: undefined,
    variations: undefined,
    references: undefined,
    examples: undefined,
    language_refs: undefined,
  };
  let [word, setWord] = useState(empty_word);

  const hook = () => {
    console.log("effect ran");
    wordService
      .getWord_byID(params.wordId)
      .then((json_word) => {
        // console.log("test");
        // console.log(json_word);
        setWord(json_word);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(hook, []);

  // let test = wordService
  //   .getWord_byID(params.wordId)
  //   .then((json_word) => {
  //     console.log("test");
  //     console.log(json_word);
  //     setWord(json_word);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // console.log("word");
  // console.log(word);
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
