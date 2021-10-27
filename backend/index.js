require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Word = require("./models/word");

app.use(express.static("build"));
app.use(cors());
app.use(express.json());

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/words/:id", (request, response, next) => {
  Word.findById(request.params.id)
    .then((word) => {
      if (word) {
        response.json(word); // found and returing
      } else {
        response.status(404).end(); // not found with correctly formatted id
      }
    })
    .catch((error) => {
      console.log("WAT IS THIS");
      next(error);
    });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.use(errorHandler);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

// {$expr: {$eq: ["$word.kannada", "$word.tulu"] } }
// {"word.english": "goovu"}
// {"word.english": /^[\s\S]{20,}$/} // number is len
// 68495-68079
