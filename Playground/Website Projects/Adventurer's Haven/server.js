const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const holidayDestinations = [
  {
    name: "Santorini, Greece",
    activity: [
      "Sunset Cruise",
      "Volcano Hike and Hot Springs",
      "Wine Tasting Tour",
      "Exploring Oia Village",
      "Water Sports at Perissa Beach",
    ],
    image:
      "https://images.pexels.com/photos/16771738/pexels-photo-16771738/free-photo-of-beautiful-thira-on-the-greek-island-santorini.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Bali, Indonesia",
    activity: [
      "Surfing Lessons",
      "Ubud Monkey Forest",
      "Tanah Lot Temple Visit",
      "Tegalalang Rice Terraces",
      "Snorkeling in Menjangan Island",
    ],
    image:
      "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Paris, France",
    activity: [
      "Eiffel Tower Visit",
      "Louvre Museum Tour",
      "Seine River Cruise",
      "Montmartre Walking Tour",
      "Day Trip to Palace of Versailles",
    ],
    image:
      "https://images.pexels.com/photos/12160606/pexels-photo-12160606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Maldives",
    activity: [
      "Snorkeling in Coral Reefs",
      "Dolphin Watching",
      "Island Hopping",
      "Spa and Wellness Retreat",
      "Scenic Seaplane Flight",
    ],
    image:
      "https://images.pexels.com/photos/2880801/pexels-photo-2880801.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "New York City, USA",
    activity: [
      "Broadway Show",
      "Times Square Exploration",
      "Central Park Bike Ride",
      "Statue of Liberty Cruise",
      "Museum of Modern Art Visit",
    ],
    image:
      "https://images.pexels.com/photos/17424949/pexels-photo-17424949/free-photo-of-manhattan-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Tokyo, Japan",
    activity: [
      "Sushi Making Class",
      "Shinjuku Gyoen National Garden",
      "Tokyo Disneyland or DisneySea",
      "Tsukiji Fish Market Visit",
      "Harajuku Shopping and Street Food",
    ],
    image:
      "https://images.pexels.com/photos/5466393/pexels-photo-5466393.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Rome, Italy",
    activity: [
      "Colosseum Tour",
      "Vatican City and Sistine Chapel Visit",
      "Trevi Fountain Experience",
      "Roman Forum Exploration",
      "Piazza Navona and Pantheon Visit",
    ],
    image:
      "https://images.pexels.com/photos/3848420/pexels-photo-3848420.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Cape Town, South Africa",
    activity: [
      "Table Mountain Hike",
      "Cape Peninsula Tour",
      "Robben Island Visit",
      "Wine Tasting in Stellenbosch",
      "Boulders Beach Penguin Colony",
    ],
    image:
      "https://images.pexels.com/photos/9324233/pexels-photo-9324233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Rio de Janeiro, Brazil",
    activity: [
      "Christ the Redeemer Statue Visit",
      "Sugarloaf Mountain Cable Car Ride",
      "Copacabana Beach Relaxation",
      "Tijuca Forest Jeep Tour",
      "Samba Dancing Experience",
    ],
    image:
      "https://images.pexels.com/photos/10254834/pexels-photo-10254834.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Sydney, Australia",
    activity: [
      "Sydney Harbour Bridge Climb",
      "Sydney Opera House Tour",
      "Bondi to Coogee Coastal Walk",
      "Taronga Zoo Visit",
      "Darling Harbour Cruise",
    ],
    image:
      "https://images.pexels.com/photos/1680249/pexels-photo-1680249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/calculator", (req, res) => {
  res.render("calculator", { adventures: holidayDestinations });
});

app.listen(3000, () => console.log("running"));
