const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "rishav",
    username: "rishav",
    email: "rishav34@gmail.com",
  });
  res.send(createduser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});
app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { username: "shreyash" },
    { name: "shreyash shukla" },
    { new: true }
  );
  res.send(updateduser);
});

app.get("/delete", async (req, res) => {
  let deletedusers = await userModel.findOneAndDelete({ username: "shreyash" });
  res.send(deletedusers);
});

app.listen(3000);
