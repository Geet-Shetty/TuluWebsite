const { MongoClient } = require("mongodb");
const Express = require("express");
const Cors = require("cors");

const dotenv = require("dotenv");
dotenv.config("./env");

const url = process.env.DB_URL;
const client = new MongoClient(url);

const server = Express();
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Cors());

let collection;

server.get("/searchTU", async (request, response) => {
  try {
    let result = await collection
      .aggregate([
        {
          $search: {
            index: "searchWords",
            text: {
              query: `${request.query.term}`,
              path: "word.tulu",
              fuzzy: {
                maxEdits: 2,
                maxExpansions: 10,
              },
            },
          },
        },
        {
          $project: {
            word: 1,
          },
        },
        {
          $limit: 50,
        },
      ])
      .toArray();
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

server.get("/searchENG", async (request, response) => {
  try {
    let result = await collection
      .aggregate([
        {
          $search: {
            index: "searchWords",
            text: {
              query: `${request.query.term}`,
              path: "word.english",
              fuzzy: {
                maxEdits: 2,
                maxExpansions: 10,
              },
            },
          },
        },
        {
          $project: {
            word: 1,
          },
        },
        {
          $limit: 50,
        },
      ])
      .toArray();
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});

server.listen("3001", async () => {
  try {
    await client.connect();
    collection = client.db("dict_compact").collection("tulus");
  } catch (e) {
    console.error(e);
  }
});

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const Word = require("./models/word");

// app.use(express.static("build"));
// app.use(cors());
// app.use(express.json());

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message);

//   if (error.name === "CastError") {
//     return response.status(400).send({ error: "malformatted id" });
//   } else if (error.name === "ValidationError") {
//     return response.status(400).json({ error: error.message });
//   }

//   next(error);
// };

// app.get("/", (request, response) => {
//   response.send("<h1>Hello World!</h1>");
// });

// app.get("/api/words/:id", (request, response, next) => {
//   Word.findById(request.params.id)
//     .then((word) => {
//       if (word) {
//         response.json(word); // found and returing
//       } else {
//         response.status(404).end(); // not found with correctly formatted id
//       }
//     })
//     .catch((error) => {
//       console.log("WAT IS THIS");
//       next(error);
//     });
// });

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: "unknown endpoint" });
// };

// app.use(unknownEndpoint);

// app.use(errorHandler);

// const PORT = 3001;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);

// // {$expr: {$eq: ["$word.kannada", "$word.tulu"] } }
// // {"word.english": "goovu"}
// // {"word.english": /^[\s\S]{20,}$/} // number is len
// // 68495-68079
// //  { variations: { $elemMatch: { origin: "Northen Dialects" } } } // search in array structures
// // { examples: { $size: 3 } } //len of examples array
// // {"meanings.definitions": {$size: 0}}
// // {"_id": ObjectId('618dd6df4a017e49673caa98')} search by id
// // {"word.english": "aaya","word.id": 8} search by word and custom id
