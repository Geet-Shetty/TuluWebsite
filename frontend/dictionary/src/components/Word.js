let Word = ({ word }) => {
  return (
    <>
      {word.id === 0 ? "" : <sup>{word.id}</sup>}
      {word.tulu} ({word.english})
    </>
  );
};

export default Word;
