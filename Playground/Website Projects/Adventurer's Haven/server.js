const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const activities = [];
const holidayDest = [
  {
    country: "Paris, France",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Taking a cooking class",
      "Attending theater performances",
      "Taking a scenic boat ride",
    ],
  },
  {
    country: "Rome, Italy",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Taking a cooking class",
      "Participating in a cultural exchange program",
      "Attending local music concerts",
    ],
  },
  {
    country: "Barcelona, Spain",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Participating in a language course",
      "Attending local festivals",
      "Enjoying nature walks",
    ],
  },
  {
    country: "Bali, Indonesia",
    activities: [
      "Exploring local markets",
      "Visiting botanical gardens",
      "Participating in a yoga retreat",
      "Taking a cooking class",
      "Going on a wildlife safari",
    ],
  },
  {
    country: "Santorini, Greece",
    activities: [
      "Shopping for unique crafts",
      "Visiting historical sites",
      "Taking a scenic helicopter ride",
      "Capturing stunning landscapes",
      "Enjoying nature walks",
    ],
  },
  {
    country: "New York City, USA",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Attending sports events",
      "Taking a scenic helicopter ride",
      "Participating in recreational activities like tennis",
    ],
  },
  {
    country: "Tokyo, Japan",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Participating in a cultural exchange program",
      "Attending local music concerts",
      "Taking a photography tour",
    ],
  },
  {
    country: "Phuket, Thailand",
    activities: [
      "Shopping for souvenirs",
      "Visiting historical sites",
      "Participating in water-based activities like paddleboarding",
      "Going on a nature excursion",
      "Taking a cooking class",
    ],
  },
  {
    country: "Prague, Czech Republic",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Taking a scenic train ride",
      "Attending theater performances",
      "Joining a guided walking tour",
    ],
  },
  {
    country: "Machu Picchu, Peru",
    activities: [
      "Hiking to Machu Picchu",
      "Exploring the Inca ruins",
      "Taking a scenic train ride",
      "Capturing stunning landscapes",
      "Participating in a cultural exchange program",
    ],
  },
  {
    country: "Cairo, Egypt",
    activities: [
      "Visiting the Pyramids of Giza",
      "Exploring ancient historical sites",
      "Taking a Nile River cruise",
      "Attending local music concerts",
      "Participating in a cultural exchange program",
    ],
  },
  {
    country: "Phnom Penh, Cambodia",
    activities: [
      "Visiting royal palaces",
      "Exploring local markets",
      "Participating in a cooking class",
      "Attending local festivals",
      "Taking a boat tour on the Mekong River",
    ],
  },
  {
    country: "Seychelles",
    activities: [
      "Relaxing on pristine beaches",
      "Snorkeling or diving in coral reefs",
      "Taking a scenic boat ride",
      "Hiking in nature reserves",
      "Indulging in wellness activities",
    ],
  },
  {
    country: "Istanbul, Turkey",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Taking a Bosphorus boat cruise",
      "Attending local music concerts",
      "Indulging in local cuisine",
    ],
  },
  {
    country: "Venice, Italy",
    activities: [
      "Taking a gondola ride",
      "Exploring local markets",
      "Visiting historical sites",
      "Attending theater performances",
      "Capturing stunning architecture",
    ],
  },
];

let destOptions = [];

// Remove duplicate destination activities
holidayDest.forEach((holiday) => {
  holiday.activities.forEach((activity) => {
    if (!activities.includes(activity)) {
      activities.push(activity);
    }
  });
});

// View your selected options
app.get("/options", (req, res) => {
  res.render("options");
});

// Get data from calculator for your options
app.post("/calculator", (req, res) => {
  destOptions.push(req.body.options);
  res.redirect("options");
});

// Home
app.get("/", (req, res) => {
  res.render("home");
});

// Calculate Page
app.get("/calculator", (req, res) => {
  res.render("calculator", { activities: activities });
});

app.listen(3000, () => console.log("running"));
