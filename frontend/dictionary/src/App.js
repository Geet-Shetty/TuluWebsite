import "./App.css";
import wordService from "./services/word";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import SearchType from "./components/SearchType";
import Display from "./components/Display";
import List from "./components/List";
import Word from "./components/Word";
import { DEFAULT_EMPTY_WORD } from "./utils/constants";

function App() {
  const empty_word_list = [];
  const [id, setIds] = useState("");
  const [term, setTerm] = useState("");
  const [word, setWord] = useState(DEFAULT_EMPTY_WORD);
  const [word_list, setWordList] = useState(empty_word_list);
  const [searchMode, setSearchMode] = useState("english");

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

  const randomWord = (event) => {
    wordService
      .getWord_RAN()
      .then((json_id) => {
        console.log(json_id);
        setIds(json_id._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchID = (event) => {
    event.preventDefault();
    if (id !== 0) {
      wordService
        .getWord_byID(id)
        .then((json_word) => {
          setWord(json_word);
          console.log(word);
        })
        .catch((error) => {
          console.log(error);
        });
      setIds("");
    }
  };

  const searchENG = (event) => {
    event.preventDefault();
    console.log(term);
    if (term !== "") {
      wordService
        .getWord_ENG(term)
        .then((json_word_list) => {
          setWordList(json_word_list);
          console.log(json_word_list);
        })
        .catch((error) => {
          console.log(error);
        });
      setTerm("");
    }
  };

  const searchTU = (event) => {
    event.preventDefault();
    if (term !== "") {
      wordService
        .getWord_TU(term)
        .then((json_word_list) => {
          setWordList(json_word_list);
          console.log(json_word_list);
        })
        .catch((error) => {
          console.log(error);
        });
      setTerm("");
    }
  };

  const handleIDChange = (event) => {
    setIds(event.target.value);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleModeChange = (event) => {
    setSearchMode(event.target.value);
  };

  return (
    <div className="grid">
      <div className="left">
        <div className="searchbox">
          <SearchType
            handleModeChange={handleModeChange}
            newMode={searchMode}
          />
          <SearchForm
            searchID={
              searchMode === "id"
                ? searchID
                : searchMode === "english"
                ? searchENG
                : searchTU
            }
            handleIDChange={
              searchMode === "id" ? handleIDChange : handleTermChange
            }
            newVal={searchMode === "id" ? id : term}
          />
          <NavLink
            style={({ isActive }) => ({
              display: "block",
              color: isActive ? "white" : "cornflowerblue",
            })}
            onClick={randomWord}
            to={`/display/${id}`}
            key={1234}
          >
            {"Random"}
          </NavLink>
        </div>
        <List word_list={word_list} />
      </div>
      <Routes>
        <Route
          path="/display/:wordId"
          element={<Display word={word} />}
        ></Route>
        <Route path="*" element={<div>Nothing here yet. :P</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
