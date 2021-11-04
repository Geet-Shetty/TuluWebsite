import "./App.css";
import wordService from "./services/word";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Display from "./components/Display";

function App() {
  const empty_word = {
    word: undefined,
    meanings: undefined,
    variations: undefined,
    references: undefined,
    examples: undefined,
    language_refs: undefined,
  };

  const [id, setIds] = useState(0);
  const [word, setWord] = useState(empty_word);

  // const hook = () => {
  //   console.log("effect");
  //   wordService
  //     .getWord("61738b5eb42847a97ef54158")
  //     .then((json_word) => {
  //       setWord(json_word);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(hook, []); // If the second parameter is an empty array [], then the effect is only run along with the first render of the component.

  const searchID = (event) => {
    event.preventDefault();
    if (id !== 0) {
      wordService
        .getWord(id)
        .then((json_word) => {
          setWord(json_word);
          console.log(word);
          // console.log(word["word"]);
          // console.log(word.word.english);
          // console.table(word);
        })
        .catch((error) => {
          console.log(error);
        });
      setIds(0);
    }
  };
  const handleIDChange = (event) => {
    console.log(event.target.value);
    setIds(event.target.value);
  };

  return (
    <>
      {/* <Switch></Switch> */}
      <div class="page">
        <div class="search left">
          <SearchForm
            searchID={searchID}
            handleIDChange={handleIDChange}
            newID={id}
          />
        </div>
        {/* 
      <div class="tulu middle">
        <WordHeader word={word.word} />
        <Meanings meanings={word.meanings} />
        <Variations variations={word.variations} />
        <References references={word.references} />
        <Examples examples={word.examples} />
        <LanguageRefs language_refs={word.language_refs} />
      </div> */}
        <Display word={word} />
      </div>
    </>
  );
}

export default App;
