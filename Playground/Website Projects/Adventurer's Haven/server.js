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

    about:
      "Welcome to Paris, the City of Lights and the epitome of romance. Immerse yourself in the enchanting blend of history, culture, and culinary delights. Stroll along the Seine River, savor delectable pastries in cozy cafes, and marvel at iconic landmarks like the Eiffel Tower and Louvre Museum. With our curated activities, you'll experience the essence of Parisian life while creating unforgettable memories with your loved ones.",
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

    about:
      "Welcome to Rome, the Eternal City, where ancient history and modern life harmoniously coexist. Lose yourself in the ancient ruins of the Colosseum, marvel at the grandeur of the Vatican City, and savor traditional Italian cuisine in charming trattorias. Let us guide you through the captivating streets of Rome, where every corner reveals a new story from the past, making your journey truly unforgettable.",
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

    about:
      "Welcome to Barcelona, a vibrant city where architectural marvels blend with lively street life and a rich cultural heritage. Explore the iconic Sagrada Família, stroll along Las Ramblas, and indulge in mouthwatering tapas. Whether you're admiring Gaudí's masterpieces or relaxing on the sandy beaches, Barcelona promises an unforgettable experience filled with art, culture, and Mediterranean charm.",
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

    about:
      "Welcome to Bali, the Island of the Gods, where lush landscapes, ancient temples, and vibrant culture await. Immerse yourself in the spiritual ambiance, learn the art of relaxation with yoga and meditation, and witness breathtaking sunsets over rice terraces. Whether you seek adventure or tranquility, Bali offers a harmonious blend of nature, spirituality, and warm hospitality to captivate your soul.",
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

    about:
      "Welcome to Santorini, a breathtaking island paradise in the Aegean Sea. Lose yourself in the mesmerizing white-washed buildings, turquoise waters, and stunning sunsets that have made this island famous. Whether you're exploring ancient ruins or savoring local delicacies, Santorini promises an idyllic escape filled with romance, charm, and enchanting landscapes.",
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

    about:
      "Welcome to New York City, the city that never sleeps and a cultural melting pot. Experience the energy of Times Square, admire the skyline from the Top of the Rock, and catch a Broadway show in the Theater District. From iconic landmarks to hidden gems, New York offers an eclectic mix of arts, cuisine, and excitement, making it a destination like no other.",
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

    about:
      "Welcome to Tokyo, a futuristic metropolis where tradition and innovation intertwine seamlessly. Immerse yourself in vibrant neighborhoods, from the serene gardens of Meiji Shrine to the bustling streets of Shibuya. Embrace the art of sushi-making, indulge in authentic ramen, and witness the awe-inspiring harmony of ancient temples and cutting-edge technology.",
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

    about:
      "Welcome to Phuket, Thailand's largest island and a tropical paradise. Sink your toes into pristine beaches, explore hidden coves, and snorkel in crystal-clear waters teeming with marine life. Whether you're seeking vibrant nightlife or tranquil hideaways, Phuket offers a perfect blend of relaxation and adventure to create unforgettable memories.",
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

    about:
      "Welcome to Prague, the City of a Hundred Spires and a treasure trove of Gothic and Baroque architecture. Wander through cobbled streets, discover the enchanting Old Town, and cross the iconic Charles Bridge. With its rich history, vibrant culture, and captivating charm, Prague promises an immersive journey through the heart of Europe's past and present.",
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

    about:
      "Welcome to Machu Picchu, the lost city of the Incas and a UNESCO World Heritage Site. Embark on an unforgettable journey through the Andean mountains, where ancient ruins blend with breathtaking landscapes. Follow the footsteps of the Inca civilization, witness the sunrise over the ancient citadel, and immerse yourself in the history and spirituality of this mystical destination.",
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

    about:
      "Welcome to Cairo, the gateway to the land of pharaohs and pyramids. Explore the iconic Pyramids of Giza, sail along the timeless Nile River, and unravel the mysteries of ancient temples and tombs. Cairo offers a fascinating blend of ancient wonders and vibrant culture, where the past meets the present, creating an unparalleled adventure through Egypt's rich history.",
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

    about:
      "Welcome to Phnom Penh, the capital city of Cambodia, where ancient traditions coexist with modern life. Discover the Royal Palace, visit sacred temples, and immerse yourself in Khmer cuisine. Delve into Cambodia's rich cultural heritage, from captivating dance performances to lively festivals. Phnom Penh promises an authentic and enriching experience in the heart of Southeast Asia.",
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

    about:
      "Welcome to Seychelles, an archipelago of paradise islands in the Indian Ocean. Bask in the sun on powder-soft beaches, swim in crystal-clear waters, and explore thriving marine life through snorkeling or diving. Whether you seek adventure or relaxation, Seychelles offers a serene escape surrounded by breathtaking landscapes and a tranquil ambiance.",
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

    about:
      "Welcome to Istanbul, a captivating city that straddles two continents, Europe and Asia. Marvel at the grandeur of the Hagia Sophia, wander through the bustling Grand Bazaar, and cruise along the iconic Bosphorus Strait. Embrace the rich tapestry of history, culture, and flavors that make Istanbul a city of enchantment and a bridge between civilizations.",
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

    about:
      "Welcome to Venice, the Floating City, where winding canals and historic palaces transport you to a world of timeless beauty. Drift along the iconic Grand Canal in a gondola, explore hidden alleyways, and savor delicious Italian cuisine in charming trattorias. Venice offers an enchanting escape that captures the heart and soul of every traveler.",
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

    about:
      "Welcome to Zurich, a picturesque Swiss city known for its pristine lakes, snow-capped mountains, and vibrant cultural scene. Explore charming Old Town, take a boat cruise on Lake Zurich, and discover world-class museums and galleries. Zurich offers a perfect blend of natural beauty and urban sophistication, creating an unforgettable experience in the heart of Switzerland.",
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

    about:
      "Welcome to Auckland, New Zealand's largest city and a gateway to breathtaking natural wonders. Explore the vibrant waterfront, visit historic sites, and embark on a wine tour in picturesque vineyards. With its diverse landscapes, from lush rainforests to stunning coastlines, Auckland offers an unforgettable blend of urban excitement and outdoor adventure.",
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

    about:
      "Welcome to Berlin, a city with a rich history, vibrant arts scene, and an eclectic mix of old and new. Explore iconic landmarks like the Brandenburg Gate, visit world-class museums, and experience the city's thriving nightlife. Berlin's creative spirit and welcoming atmosphere make it an exciting destination with something to offer every traveler.",
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

    about:
      "Welcome to Budapest, a captivating city straddling the Danube River, known for its grand architecture and rejuvenating thermal baths. Discover the beauty of the Hungarian Parliament, soak in historic bathhouses, and explore the charming neighborhoods of Buda and Pest. Budapest offers a delightful fusion of history, culture, and relaxation that will leave you enchanted.",
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

    about:
      "Welcome to Cape Verde, an archipelago of stunning islands off the coast of West Africa. Relax on sandy beaches, explore volcanic landscapes, and dive into turquoise waters teeming with marine life. Cape Verde's diverse beauty, warm hospitality, and vibrant culture make it a hidden gem for those seeking an off-the-beaten-path paradise.",
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

    about:
      "Welcome to Edinburgh, Scotland's enchanting capital, where history and culture come alive. Wander through the medieval streets of the Old Town, visit the iconic Edinburgh Castle, and experience the world-famous Edinburgh Festival. From historic landmarks to spine-chilling ghost tours, Edinburgh offers a magical journey through the heart of Scotland's rich heritage.",
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

    about:
      "Welcome to Iceland, the land of fire and ice, where otherworldly landscapes and natural wonders await. Witness the dramatic beauty of geysers, soak in geothermal hot springs, and marvel at stunning ice caves. With its pristine wilderness and jaw-dropping vistas, Iceland offers an extraordinary adventure into the heart of nature.",
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

    about:
      "Welcome to Kyoto, Japan's cultural heart and a city steeped in tradition and beauty. Immerse yourself in the serene ambiance of bamboo groves, admire the vibrant hues of cherry blossoms, and experience the art of the traditional tea ceremony. Kyoto's timeless charm, ancient temples, and seasonal delights offer an authentic journey into Japan's past and present.",
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

    about:
      "Welcome to Marrakesh, a bustling city in Morocco where old-world charm meets modern energy. Lose yourself in the labyrinthine souks, savor the flavors of Moroccan cuisine, and experience the vibrant colors of the medina. Marrakesh offers a sensory journey through an exotic landscape that will leave you captivated and inspired.",
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

    about:
      "Welcome to Zanzibar, a tropical paradise off the coast of Tanzania. Relax on powdery beaches, dive into vibrant coral reefs, and explore the historic streets of Stone Town. Known as the Spice Island, Zanzibar offers an intoxicating blend of cultures, flavors, and stunning landscapes that will leave you enchanted by its beauty.",
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
        about: holiday.about,
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
