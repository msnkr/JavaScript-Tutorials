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
    image:
      "https://images.pexels.com/photos/16934112/pexels-photo-16934112/free-photo-of-panorama-or-paris-with-orthodox-church-and-sacre-coeur-basilica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/3722811/pexels-photo-3722811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/16983976/pexels-photo-16983976/free-photo-of-building-of-la-sagrada-familia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/5034340/pexels-photo-5034340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/8599621/pexels-photo-8599621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/14455695/pexels-photo-14455695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/3727260/pexels-photo-3727260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/9939690/pexels-photo-9939690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/11645028/pexels-photo-11645028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/16982831/pexels-photo-16982831/free-photo-of-tourists-walking-in-istanbul-old-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    image:
      "https://images.pexels.com/photos/2954558/pexels-photo-2954558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

let destOptions = [];
let yourHoliday = [];
// let anotherList = [];

// Filter again for duplicates in yourHoliday
// function anotherFilter(yourHoliday) {}

// Check destOptions against holidayDest and filter destinations
function filterDest(options) {
  const findOptions = options[0];
  findOptions.forEach((option) => {
    holidayDest.forEach((holiday) => {
      if (holiday.activities.includes(option)) {
        yourHoliday.push(holiday);
      }
    });
  });
  // anotherFilter(yourHoliday);
}

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
  res.render("options", { destOptions: yourHoliday });
});

// Get data from calculator for your options
app.post("/calculator", (req, res) => {
  destOptions.push(req.body.options);
  filterDest(destOptions);
  res.redirect("options");
});

// Home
app.get("/", (req, res) => {
  res.render("home");
});

// Calculate Page
app.get("/calculator", (req, res) => {
  yourHoliday = [];
  destOptions = [];

  res.render("calculator", { activities: activities });
});

app.listen(3000, () => console.log("https:localhost:3000"));
