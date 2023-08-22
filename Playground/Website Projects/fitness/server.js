const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const chestWorkouts = [
  {
    name: "benchpress",
    shortDesc:
      "Bench press: Lie on bench, lift weighted barbell from rack, lower to chest, push up. Targets chest, shoulders, triceps. Upper body strength exercise.",
    longDesc:
      "A bench press is a popular strength training exercise that primarily targets the muscles of the chest, shoulders, and triceps. It involves lying flat on a weight bench while lifting a barbell loaded with weights off a rack, lowering it to the chest, and then pushing it back up to the starting position. This exercise is commonly performed in gyms and is a fundamental component of many workout routines aimed at building upper body strength and muscle mass. It can be adapted for various fitness levels by adjusting the weight lifted and the number of repetitions and sets performed.",
  },
  {
    name: "incline benchpress",
    shortDesc:
      "ncline bench press: Lift weights on angled bench to work upper chest, shoulders, triceps. Enhances upper body strength.",
    longDesc:
      "The incline bench press is a weightlifting exercise performed on an inclined bench, targeting the upper chest, shoulders, and triceps. It involves lifting a barbell or dumbbells from a rack, lowering them to the upper chest, and pushing them back up. This variation emphasizes the upper pectoral muscles and enhances overall upper body strength and muscle development.",
  },
  {
    name: "dumbell flies",
    shortDesc:
      "Dumbbell flies: Lie on bench, lower and raise dumbbells in wide arc, engaging chest muscles for improved width and definition",
    longDesc:
      "Dumbbell flies are a chest-focused exercise where you lie on a bench, holding dumbbells above your chest with slightly bent elbows. Lower the weights out to your sides in a wide arc, feeling a stretch in your chest, and then bring the weights back up in a controlled manner. This movement engages the pectoral muscles, helping to develop chest width and definition. Proper form is crucial to prevent strain on the shoulders and ensure an effective stretch and contraction of the chest muscles.",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {});
