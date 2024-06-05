const express = require("express");
const app = express();
const port = 3051;

// get, post, patch, put, delete

app.get("/", (req, res) => {
  res.send("Hello Sohel, How Can I Help You  Orpa ");
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
