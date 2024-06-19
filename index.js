const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = 3051;
require("dotenv").config();
//const { GoogleGenerativeAI } = require("@google/generative-ai");
//const gemini_api_key = "AIzaSyDloTf7rqokH7CWlvISzZRGYdlkPYj7R6A";
//username: sohes_testing
//password: hU6aLsK4Wsb2FUi7

const uri = `mongodb+srv://sohes_testing:hU6aLsK4Wsb2FUi7@cluster0.jtt3rj8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

//username:projectone
//password:xDkxbBrTYIm1lFpg
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// get, post, patch, put, delete
// middlewere
app.use(express.json());
// date 8-6-2024
async function run() {
  // collection
  const db = client.db("shoes_management");
  const shoesCollection = db.collection("shoes");
  app.get("/", (req, res) => {
    res.send("Hello Sohel, How Can I Help You  Rana ");
  });
  app.get("/api/v1/orpa", (req, res) => {
    const name = "Kaspia Hassan Orpa";
    const age = 20;
    const gender = "Female";
    const university = "Daffodil International University";
    console.log({ name, age, gender, university });
    res.send({ name, age, gender, university });
  });
  app.get("/api/v1/sohel", (req, res) => {
    const name = "Ali Mohammad Sohel Rana";
    const age = 50;
    const gender = "Male";
    const university = "Daffodil International University";
    res.send({ name, age, gender, university });
  });

  // date ---> 10-6-2024
  app.post("/newPost", async (req, res) => {
    const data = req.body;
    // mongodb databas
    const result = await shoesCollection.insertOne(data);
    res.send(result);
  });
  app.get("/diplay", async (req, res) => {
    const result = await shoesCollection.find().toArray();

    res.send(result);
  });

  app.patch("/shoesUpdate", (req, res) => {
    const data = req.body;
    // mongodb database
    console.log(data);
    res.send(data);
  });

  /*https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/
    next dat 
    ....> find by specific user 
    ----> update ---> patch /put
    ----> delete ----> delete
    // CURD FUNCATIONALITY 
  
  */
}
// app.get("/geminiApi", async (req, res) => {
//   const googleAI = new GoogleGenerativeAI(gemini_api_key);
//   const geminiConfig = {
//     temperature: 0.9,
//     topP: 1,
//     topK: 1,
//     maxOutputTokens: 4096,
//   };
//   const geminiModel = googleAI.getGenerativeModel({
//     model: "gemini-pro",
//     geminiConfig,
//   });
//   try {
//     const prompt = "Tell me about google.";
//     const result = await geminiModel.generateContent(prompt);
//     const response = result.response;
//     console.log(response.text());
//     res.send({ message: response.text() });
//   } catch (error) {
//     console.log("response error", error);
//   }
// });
run()
  .then(() => {
    console.log("Successfully Run");
  })
  .catch((error) => {
    console.log(error?.message);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
