import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import wordService from '../services/word';
import WordHeader from './WordHeader';
import Meanings from './Meanings';
import Variations from './Variations';
import References from './References';
import LanguageRefs from './LanguageRefs';
import Examples from './Examples';
import { DEFAULT_EMPTY_WORD } from '../utils/constants';

let Display = () => {
  let params = useParams();
  let wordId = params.wordId;
  console.log('wordId: ', wordId);

  const [word, setWord] = useState(DEFAULT_EMPTY_WORD);

  useEffect(() => {
    const getWord = async () => {
      try {
        const word = await wordService.getWord_byID(wordId);
        setWord(word);
      } catch (err) {
        setWord(DEFAULT_EMPTY_WORD);
        console.error(err);
      }
    };
    getWord();
  }, [wordId]);

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
