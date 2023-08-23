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

const shouldersWorkouts = [
  {
    name: "shoulder press",
    shortDesc:
      "Press weights overhead from shoulder height. Targets deltoid muscles, building shoulder strength and definition.",
    longDesc:
      "The shoulder press, also known as the overhead press, is a compound upper body exercise that focuses on developing the deltoid muscles. Starting with weights at shoulder level, you press them overhead until your arms are fully extended. This movement engages the anterior, lateral, and posterior deltoids, as well as the triceps and upper back muscles for stability. Shoulder presses contribute to well-rounded shoulder development, aiding in activities that involve pushing movements. Proper form is essential to prevent strain on the lower back and ensure effective muscle engagement. It's a key exercise in strength training routines aimed at building upper body strength and sculpting the shoulders.",
  },
  {
    name: "lateral raises",
    shortDesc:
      " Lift weights to sides, targeting lateral deltoids. Enhances shoulder width and overall shoulder aesthetics.",
    longDesc:
      "Lateral raises are isolation exercises designed to target the lateral deltoid muscles of the shoulders. Holding weights in each hand, you lift your arms out to the sides until they are roughly parallel to the ground. This movement isolates the lateral deltoids, contributing to enhanced shoulder width and overall shoulder aesthetics. Lateral raises also assist in shoulder joint stability and can address imbalances in shoulder development. Care should be taken to use an appropriate weight and maintain controlled movements to avoid excess strain on the shoulder joints. Integrating lateral raises into your workout routine can complement compound shoulder exercises and create a balanced shoulder profile.",
  },
  {
    name: "dumbell seated overhead press",
    shortDesc:
      "Sit, lift dumbbells overhead. Targets shoulders, triceps. Builds strength and stability. Enhances shoulder development.",
    longDesc:
      "The dumbbell seated overhead press is a compound upper body exercise where you sit on a bench with a backrest and lift dumbbells from shoulder height to overhead. This movement primarily targets the deltoid muscles of the shoulders and engages the triceps for assistance. As you press the weights upwards, your core and stabilizing muscles work to maintain balance and control. The seated position minimizes the use of momentum, isolating the shoulder muscles for effective strength and size gains. Dumbbell seated overhead presses are valuable for enhancing shoulder development, increasing upper body strength, and promoting overall upper body stability. Proper form is vital to prevent strain and maximize muscle engagement.",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/muscles/:muscleID", (req, res) => {
  const muscleGroup = req.params.muscleID;
  const muscleWorkout = muscleGroup.toLowerCase() + "Workouts";
  res.render("muscle", { muscles: eval(muscleWorkout) });
});

app.listen(3000, () => {});
