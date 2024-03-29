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

const options = ["Attending theater performances", "Hiking in nature reserves"];

holidayDest.forEach((destination) => {
  options.forEach((option) => {
    if (destination.activities.includes(option)) {
      console.log(destination);
    }
  });
});
