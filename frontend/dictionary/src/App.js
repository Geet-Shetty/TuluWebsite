import "./App.css";
import wordService from "./services/word";
import { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import WordHeader from "./components/WordHeader";
import Meanings from "./components/Meanings";

function App() {
  const empty_word = {
    word: {
      kannada: "",
      english: "",
      tulu: "",
      origin: "",
      id: 0,
    },
    meanings: [
      {
        contexts: [],
        linked_context: {
          context: "",
          kannada: "",
          english: "",
          tulu: "",
          id: 0,
        },
        definitions: [
          {
            kannada: [],
            english: [],
          },
        ],
      },
    ],
    variations: [
      {
        origin: String,
        words: [
          {
            kannada: String,
            english: String,
            tulu: String,
            id: Number,
          },
        ],
      },
    ],
    references: [
      {
        reference: String,
        sentences: [
          {
            tulu: String,
            english: String,
            kannada: String,
          },
        ],
      },
    ],
    examples: [String],
    language_references: String,
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
          // console.log(word);
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
    <div class="tulu">
      <SearchForm
        searchID={searchID}
        handleIDChange={handleIDChange}
        newID={id}
      />
      <WordHeader word={word.word} />
      <Meanings meanings={word.meanings} />
    </div>
  );
}

export default App;
