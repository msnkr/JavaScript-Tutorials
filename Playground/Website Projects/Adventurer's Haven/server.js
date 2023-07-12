const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const activitiesList = [
  "Taking a scenic helicopter ride",
  "Taking a hot air balloon ride",
  "Exploring local markets",
  "Shopping for unique crafts",
  "Shopping for souvenirs",
  "Going on a wine tour",
  "Going on a brewery tour",
  "Tasting local beverages",
  "Taking a cooking class",
  "Learning how to prepare local cuisine",
  "Visiting botanical gardens",
  "Enjoying nature walks",
  "Attending a sports event",
  "Participating in recreational activities like golf",
  "Participating in recreational activities like tennis",
  "Going on a wildlife safari",
  "Going on a nature excursion",
  "Observing native animals",
  "Visiting historical sites",
  "Learning about the destination's heritage",
  "Participating in a cultural exchange program",
  "Participating in a homestay",
  "Immersing in the local culture",
  "Going on a photography tour",
  "Capturing stunning landscapes",
  "Capturing stunning architecture",
  "Participating in a yoga retreat",
  "Participating in a meditation retreat",
  "Rejuvenating and finding inner peace",
  "Exploring underwater wonders through snorkeling",
  "Exploring underwater wonders through diving expeditions",
  "Attending local music concerts",
  "Attending theater performances",
  "Attending dance shows",
  "Engaging in adrenaline-pumping activities like skydiving",
  "Engaging in adrenaline-pumping activities like canyoning",
  "Engaging in adrenaline-pumping activities like rock climbing",
  "Taking a scenic train ride",
  "Taking a scenic boat ride",
  "Enjoying breathtaking views along the way",
  "Visiting theme parks",
  "Enjoying thrilling rides",
  "Enjoying entertainment",
  "Participating in water-based activities like jet skiing",
  "Participating in water-based activities like parasailing",
  "Participating in water-based activities like paddleboarding",
  "Going on a road trip",
  "Exploring multiple destinations",
  "Exploring scenic routes",
  "Joining a guided hiking tour",
  "Joining a guided trekking tour",
  "Discovering remote and beautiful trails",
  "Attending local festivals",
  "Experiencing the vibrant atmosphere",
  "Taking a cruise",
  "Taking a sailing trip",
  "Exploring coastal destinations",
  "Exploring island destinations",
  "Engaging in winter sports like snowboarding",
  "Engaging in winter sports like skiing",
  "Engaging in winter sports like snowshoeing",
  "Going on a camping adventure",
  "Going on a glamping adventure",
  "Connecting with nature",
  "Taking a spa day",
  "Indulging in wellness activities",
  "Indulging in wellness treatments",
  "Visiting famous film locations",
  "Visiting famous TV show locations",
  "Adding a touch of pop culture",
  "Exploring caves through guided tours",
  "Exploring underground formations through guided tours",
  "Participating in a language course",
  "Participating in cultural workshops",
  "Learning something new",
  "Going on a fishing trip",
  "Chartering a boat for deep-sea fishing",
  "Attending cooking demonstrations",
  "Attending food festivals",
  "Savoring local delicacies",
  "Engaging in volunteer work",
  "Engaging in community service",
  "Giving back to the destination",
];

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

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/calculator", (req, res) => {
  res.render("calculator", { activities: activitiesList });
});

app.listen(3000, () => console.log("running"));
