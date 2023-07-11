const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const activities = [
  "wildlife safari",
  "nature excursion",
  "local music concerts",
  "theater performances",
  "Taking a scenic helicopter",
  "hot air balloon ride",
  "wine or brewery tour",
  "local beverages",
];

const holidayActivities = [
  {
    country: "Cape Town, South Africa",
    countryActivities: [
      "Taking a scenic helicopter",
      "hot air balloon ride",
      "wine or brewery tour",
      "local beverages",
    ],
  },
  {
    country: "Sydney, Australia",
    countryActivities: [
      "wildlife safari",
      "nature excursion",
      "local music concerts",
      "theater performances",
    ],
  },
];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/calculator", (req, res) => {
  res.render("calculator");
});

app.listen(3000, () => console.log("running"));
