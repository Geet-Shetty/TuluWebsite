import './App.css';
import wordService from './services/word';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import SearchType from './components/SearchType';
import Display from './components/Display';
import List from './components/List';

function App() {
  const empty_word = {
    word: undefined,
    meanings: undefined,
    variations: undefined,
    references: undefined,
    examples: undefined,
    language_refs: undefined,
  };

  const empty_word_list = [];
  const [id, setIds] = useState('');
  const [term, setTerm] = useState('');
  const [word, setWord] = useState(empty_word);
  const [word_list, setWordList] = useState(empty_word_list);
  const [searchMode, setSearchMode] = useState('english');

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

  // const
  const searchID = (event) => {
    event.preventDefault();
    if (id !== 0) {
      wordService
        .getWord_byID(id)
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
      setIds('');
    }
  };

  const searchENG = (event) => {
    event.preventDefault();
    console.log(term);
    if (term !== '') {
      wordService
        .getWord_ENG(term)
        .then((json_word_list) => {
          setWordList(json_word_list);
          console.log(json_word_list);
          // console.log(word["word"]);
          // console.log(word.word.english);
          // console.table(word);
        })
        .catch((error) => {
          console.log(error);
        });
      setTerm('');
    }
  };

  const searchTU = (event) => {
    event.preventDefault();
    if (term !== '') {
      wordService
        .getWord_TU(term)
        .then((json_word_list) => {
          setWordList(json_word_list);
          console.log(json_word_list);
          // console.log(word["word"]);
          // console.log(word.word.english);
          // console.table(word);
        })
        .catch((error) => {
          console.log(error);
        });
      setTerm('');
    }
  };

  const handleIDChange = (event) => {
    // console.log(event.target.value);
    setIds(event.target.value);
  };

  const handleTermChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };

  const handleModeChange = (event) => {
    // console.log(event.target.value);
    setSearchMode(event.target.value);
    // console.log(term);
  };

  const linkRouter = (id) => {
    console.log('this ran');
    setIds(id);
    return searchID;
  };

  return (
    <div class="grid">
      <div class="left">
        <div class="searchbox">
          <SearchType
            handleModeChange={handleModeChange}
            newMode={searchMode}
          />
          <SearchForm
            searchID={
              searchMode === 'id'
                ? searchID
                : searchMode === 'english'
                ? searchENG
                : searchTU
            }
            handleIDChange={
              searchMode === 'id' ? handleIDChange : handleTermChange
            }
            newVal={searchMode === 'id' ? id : term}
          />
        </div>
        <List word_list={word_list} linkRouter={searchID} />
      </div>
      <Routes>
        <Route
          path="/display/:wordId"
          element={<Display word={word} />}
        ></Route>
        <Route path="*" element={<div>404 Path does not exist</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
