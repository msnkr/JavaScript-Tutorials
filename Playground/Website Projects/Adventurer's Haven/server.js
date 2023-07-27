const express = require("express");
const bodyParser = require("body-parser");
var _ = require("lodash");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var array = require("lodash/array");

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
  {
    country: "Zurich, Switzerland",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Taking a scenic boat ride",
      "Participating in cultural workshops",
      "Enjoying nature walks",
    ],
    image:
      "https://images.pexels.com/photos/14456692/pexels-photo-14456692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    country: "Auckland, New Zealand",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Going on a wine tour",
      "Taking a scenic helicopter ride",
      "Hiking in national parks",
    ],
    image:
      "https://images.pexels.com/photos/7250790/pexels-photo-7250790.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    country: "Berlin, Germany",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Participating in cultural workshops",
      "Attending local music concerts",
      "Taking a boat tour on the Spree River",
    ],
    image:
      "https://images.pexels.com/photos/2917871/pexels-photo-2917871.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    country: "Budapest, Hungary",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Taking a scenic boat ride",
      "Enjoying thermal baths",
      "Attending local festivals",
    ],
    image:
      "https://images.pexels.com/photos/2350351/pexels-photo-2350351.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    country: "Cape Verde",
    activities: [
      "Relaxing on beautiful beaches",
      "Snorkeling or diving in clear waters",
      "Exploring volcanic landscapes",
      "Taking a boat tour to neighboring islands",
      "Indulging in local cuisine",
    ],
    image:
      "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    country: "Edinburgh, Scotland",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Attending theater performances",
      "Taking a scenic train ride",
      "Joining a ghost tour",
    ],
    image:
      "https://images.pexels.com/photos/12121851/pexels-photo-12121851.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    country: "Iceland",
    activities: [
      "Exploring geysers and hot springs",
      "Visiting glaciers and ice caves",
      "Going on a whale-watching tour",
      "Taking a scenic helicopter ride",
      "Catching the Northern Lights",
    ],
    image:
      "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    country: "Kyoto, Japan",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Participating in a traditional tea ceremony",
      "Attending cultural festivals",
      "Enjoying cherry blossom viewing",
    ],
    image:
      "https://images.pexels.com/photos/356629/pexels-photo-356629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    country: "Marrakesh, Morocco",
    activities: [
      "Exploring local markets",
      "Visiting historical sites",
      "Taking a camel ride in the desert",
      "Attending local music concerts",
      "Enjoying Moroccan cuisine",
    ],
    image:
      "https://images.pexels.com/photos/13811606/pexels-photo-13811606.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    country: "Zanzibar, Tanzania",
    activities: [
      "Relaxing on white sandy beaches",
      "Snorkeling or diving in coral reefs",
      "Visiting spice plantations",
      "Taking a boat tour to Prison Island",
      "Exploring Stone Town",
    ],
    image:
      "https://images.pexels.com/photos/2949825/pexels-photo-2949825.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

let destOptions = [];
let yourHoliday = [];
let bookDest = {};

let selectedOption = "";

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
}

// Remove duplicate destination activities
holidayDest.forEach((holiday) => {
  holiday.activities.forEach((activity) => {
    if (!activities.includes(activity)) {
      activities.push(activity);
    }
  });
});

// Guides tab
app.get("/guide", (req, res) => {
  res.render("guide");
});

// About tab
app.get("/about", (req, res) => {
  res.render("about");
});

// Gallery Tab
app.get("/gallery", (req, res) => {
  res.render("gallery");
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

// Book your holiday
app.get("/book", (req, res) => {
  let bookingName = req.query.destination;
  holidayDest.forEach((holiday) => {
    if (holiday.country === req.query.destination) {
      bookDest = {
        country: holiday.country,
        activities: holiday.activities,
        image: holiday.image,
      };
    }
  });
  res.render("book", { bookDest: bookDest });
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
