const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const chestWorkouts = [
  {
    name: "benchpress",
    shortDesc:
      "Lie on bench, lift weighted barbell from rack, lower to chest, push up. Targets chest, shoulders, triceps. Upper body strength exercise.",
    longDesc:
      "A bench press is a popular strength training exercise that primarily targets the muscles of the chest, shoulders, and triceps. It involves lying flat on a weight bench while lifting a barbell loaded with weights off a rack, lowering it to the chest, and then pushing it back up to the starting position. This exercise is commonly performed in gyms and is a fundamental component of many workout routines aimed at building upper body strength and muscle mass. It can be adapted for various fitness levels by adjusting the weight lifted and the number of repetitions and sets performed.",
  },
  {
    name: "incline benchpress",
    shortDesc:
      "Lift weights on angled bench to work upper chest, shoulders, triceps. Enhances upper body strength.",
    longDesc:
      "The incline bench press is a weightlifting exercise performed on an inclined bench, targeting the upper chest, shoulders, and triceps. It involves lifting a barbell or dumbbells from a rack, lowering them to the upper chest, and pushing them back up. This variation emphasizes the upper pectoral muscles and enhances overall upper body strength and muscle development.",
  },
  {
    name: "dumbell flies",
    shortDesc:
      "Lie on bench, lower and raise dumbbells in wide arc, engaging chest muscles for improved width and definition",
    longDesc:
      "Dumbbell flies are a chest-focused exercise where you lie on a bench, holding dumbbells above your chest with slightly bent elbows. Lower the weights out to your sides in a wide arc, feeling a stretch in your chest, and then bring the weights back up in a controlled manner. This movement engages the pectoral muscles, helping to develop chest width and definition. Proper form is crucial to prevent strain on the shoulders and ensure an effective stretch and contraction of the chest muscles.",
  },
];

const absWorkouts = [
  {
    name: "crunches",
    shortDesc:
      " Lie on back, raise shoulders toward knees. Targets core muscles for strength and definition.",
    longDesc:
      "Crunches are a classic abdominal exercise aimed at strengthening and defining the core muscles. Performing crunches involves lying on your back with knees bent and feet flat on the ground. With hands behind your head or crossed over your chest, you contract your abdominal muscles to lift your shoulders off the ground without lifting your lower back. This movement isolates the rectus abdominis, commonly known as the 'six-pack' muscles, and also engages the obliques to a lesser extent. Crunches help improve core stability, posture, and can contribute to achieving a more sculpted midsection when combined with a balanced fitness routine and healthy diet.",
  },
  {
    name: "hand plank",
    shortDesc:
      "Core-strengthening pose. Support body on forearms and toes, maintaining straight line. Engages core, shoulders, and stabilizing muscles.",
    longDesc:
      "Hand planks, a fundamental bodyweight exercise, involve maintaining a push-up position with arms extended and hands flat on the ground, directly beneath your shoulders. Your body forms a straight line from head to heels, engaging the core muscles for stability. Hand planks target the rectus abdominis, obliques, transverse abdominis, and lower back muscles while also challenging the shoulders, arms, and stabilizing muscles. This exercise improves core strength, overall stability, and posture. Variations like side planks or dynamic movements can add variety and further engage the muscles, making hand planks a versatile choice in full-body workouts.",
  },
  ,
  {
    name: "dumbell russian twist",
    shortDesc:
      "Sit, hold dumbbell, twist torso to each side. Enhances core strength, stability, and rotational power.",
    longDesc:
      "The dumbbell Russian twist is a dynamic core exercise that targets the oblique muscles and enhances overall core strength and rotational power. In this exercise, you sit on the floor with your knees bent and feet flat, holding a dumbbell with both hands close to your chest. As you lift your feet slightly off the ground, you twist your torso from side to side while maintaining a straight back. This movement engages the oblique muscles responsible for rotational movements and lateral stability. The added resistance from the dumbbell intensifies the exercise, contributing to improved core strength, posture, and athletic performance that involves rotational movements.",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log(req.params.id);
});

app.get("/muscles/:muscleID", (req, res) => {
  const muscleGroup = req.params.muscleID;
  const muscleWorkout = muscleGroup.toLowerCase() + "Workouts";
  res.render("muscle", { muscles: eval(muscleWorkout) });
});

app.listen(3000, () => {});
