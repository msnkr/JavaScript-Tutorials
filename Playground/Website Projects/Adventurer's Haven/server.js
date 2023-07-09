const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const adventures = [
  "Hot Air Balloon Ride",
  "Cave Exploration",
  "Paragliding",
  "Dog Sledding",
  "Desert Safari",
  "Whitewater Rafting",
  "Zip Lining",
  "Volcano Trekking",
  "Wildlife Safari",
  "Underwater Exploration",
  "Bungee Jumping",
  "Glacier Hiking",
  "Skydiving",
  "Rock Climbing",
  "Deep-sea Fishing",
  "Sandboarding",
  "Canyoning",
  "Treehouse Camping",
  "Motorbike Tour",
  "Arctic Expedition"
];


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/calculator", (req, res) => {
  res.render("calculator", {adventures:adventures});
});

app.listen(3000, () => console.log("running"));
