const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config("./env");

const url = process.env.DB_URL;

let conn = mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const wordSchema = new mongoose.Schema({
  word: {
    kannada: String,
    english: String,
    tulu: String,
    origin: String,
    id: Number,
  },
  meanings: [
    {
      contexts: [String],
      linked_context: {
        context: String,
        kannada: String,
        english: String,
        tulu: String,
        id: Number,
      },
      definitions: [{ kannada: [String], english: [String] }],
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
});

wordSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    // delete returnedObject._id;
    // delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Tulu", wordSchema);
