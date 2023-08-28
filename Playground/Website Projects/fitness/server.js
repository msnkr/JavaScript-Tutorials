const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let muscleGroup = "";
const workouts = {
  chest: [
    {
      name: "benchpress",
      shortDesc: "Lie on bench, lift weighted barbell from rack...",
      longDesc: "A bench press is a popular strength training exercise...",
    },
    {
      name: "incline benchpress",
      shortDesc: "Lift weights on angled bench to work upper chest...",
      longDesc: "The incline bench press is a weightlifting exercise...",
    },
    {
      name: "dumbell flies",
      shortDesc: "Lie on bench, lower and raise dumbbells in wide arc...",
      longDesc: "Dumbbell flies are a chest-focused exercise where you...",
    },
    // ... other chest workouts ...
  ],
  abs: [
    {
      name: "crunches",
      shortDesc: "Lie on back, raise shoulders toward knees...",
      longDesc: "Crunches are a classic abdominal exercise aimed at...",
    },
    {
      name: "hand plank",
      shortDesc: "Core-strengthening pose. Support body on forearms...",
      longDesc: "Hand planks, a fundamental bodyweight exercise...",
    },
    {
      name: "dumbell russian twist",
      shortDesc: "Sit, hold dumbbell, twist torso to each side...",
      longDesc: "The dumbbell Russian twist is a dynamic core exercise...",
    },
    // ... other abs workouts ...
  ],
  shoulders: [
    {
      name: "shoulder press",
      shortDesc: "Press weights overhead from shoulder height...",
      longDesc: "The shoulder press, also known as the overhead press...",
    },
    {
      name: "lateral raises",
      shortDesc: "Lift weights to sides, targeting lateral deltoids...",
      longDesc: "Lateral raises are isolation exercises designed to...",
    },
    {
      name: "dumbell seated overhead press",
      shortDesc: "Sit, lift dumbbells overhead. Targets shoulders...",
      longDesc: "The dumbbell seated overhead press is a compound...",
    },
    // ... other shoulders workouts ...
  ],
  legs: [
    {
      name: "Squat",
      shortDesc: "Full-body exercise. Bend knees, lower hips, then rise...",
      longDesc: "The squat is a foundational full-body exercise...",
    },
    {
      name: "Deadlift",
      shortDesc: "Hip-hinge movement. Lift barbell from floor to hips...",
      longDesc: "The deadlift is a fundamental hip-hinge exercise...",
    },
    {
      name: "Lunges",
      shortDesc: "Step forward, lower rear knee toward ground...",
      longDesc: "Lunges are a versatile lower body exercise...",
    },
    // ... other legs workouts ...
  ],
  back: [
    {
      name: "Pull-Ups",
      shortDesc: "Vertical pull exercise. Lift body by arms from hanging...",
      longDesc: "Pull-ups are a classic vertical pulling exercise...",
    },
    {
      name: "Bent-Over Rows",
      shortDesc: "Horizontal pull movement. Row weight towards hips...",
      longDesc: "Bent-over rows are a horizontal pulling exercise...",
    },
    {
      name: "T-Bar Rows",
      shortDesc: "Compound back exercise. Row weight attached to barbell...",
      longDesc: "T-bar rows are a compound back exercise...",
    },
    // ... other back workouts ...
  ],
  arms: [
    {
      name: "Bicep Curls",
      shortDesc: "Isolation exercise. Curl weight with palms facing up...",
      longDesc: "Bicep curls are a classic isolation exercise...",
    },
    {
      name: "Tricep Dips",
      shortDesc:
        "Bodyweight exercise. Lower and lift body using parallel bars...",
      longDesc: "Tricep dips are a bodyweight exercise that targets...",
    },
    {
      name: "Hammer Curls",
      shortDesc: "Alternate dumbbell curls. Palms face each other...",
      longDesc: "Hammer curls are an alternate dumbbell curl variation...",
    },
    // ... other arms workouts ...
  ],
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:muscleID", (req, res) => {
  muscleGroup = req.params.muscleID;
  res.render("muscle", { muscles: workouts[muscleGroup] });
});

app.get("/:muscleID/:workoutID", (req, res) => {
  const workoutID = req.params.workoutID;
  res.render("workout", { workouts: workouts[muscleGroup] });
});

app.listen(3000, () => {});
