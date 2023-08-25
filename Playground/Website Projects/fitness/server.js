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

const legsWorkouts = [
  {
    name: "Squat",
    shortDesc:
      "Full-body exercise. Bend knees, lower hips, then rise. Targets quads, hamstrings, glutes.",
    longDesc:
      "The squat is a foundational full-body exercise. With feet shoulder-width apart, bend your knees and lower your hips as if sitting back into a chair. Keep your back straight and chest up. Then, push through your heels to return to a standing position. Squats target the quadriceps, hamstrings, and glutes while also engaging the core and lower back muscles for stability. This compound movement is essential for building lower body strength, improving mobility, and enhancing overall lower body aesthetics.",
  },
  {
    name: "Deadlift",
    shortDesc:
      "Hip-hinge movement. Lift barbell from floor to hips. Targets hamstrings, glutes, lower back.",
    longDesc:
      "The deadlift is a fundamental hip-hinge exercise that targets the hamstrings, glutes, and lower back muscles. Starting with a barbell on the ground, bend at the hips while keeping your back straight, then lift the barbell while pushing your hips forward. Deadlifts engage the posterior chain muscles and also involve the core for stability. Proper form is crucial to prevent lower back strain. Deadlifts are effective for building lower body strength, enhancing hip mobility, and supporting overall functional fitness.",
  },
  {
    name: "Lunges",
    shortDesc:
      "Step forward, lower rear knee toward ground. Targets quads, hamstrings, glutes, improves balance.",
    longDesc:
      "Lunges are a versatile lower body exercise that challenges leg muscles and improves balance. Step forward with one leg and lower your rear knee toward the ground, creating 90-degree angles with both knees. Push through the front heel to return to the starting position. Lunges target the quadriceps, hamstrings, and glutes while also engaging stabilizing muscles. They help address muscle imbalances, increase leg strength, and enhance lower body stability. Variations include forward, reverse, and lateral lunges, allowing you to target different muscle fibers and add variety to your leg workout routine.",
  },
];

const backWorkouts = [
  {
    name: "Pull-Ups",
    shortDesc:
      "Vertical pull exercise. Lift body by arms from hanging position. Targets upper back, biceps.",
    longDesc:
      "Pull-ups are a classic vertical pulling exercise where you lift your body by gripping a bar with palms facing away. Engaging the upper back muscles, especially the latissimus dorsi, as well as the biceps and upper arms, pull-ups promote back strength and width development. The exercise challenges your grip strength and core stability. Mastering pull-ups takes practice, and modifications like assisted pull-ups or chin-ups can be used to gradually build strength. Incorporating pull-ups into your routine enhances overall upper body strength and posture.",
  },
  {
    name: "Bent-Over Rows",
    shortDesc:
      "Horizontal pull movement. Row weight towards hips. Targets middle back, lats, biceps.",
    longDesc:
      "Bent-over rows are a horizontal pulling exercise where you hinge at the hips, keeping your back straight, and row a weight towards your hips. This movement primarily targets the middle back muscles, including the latissimus dorsi, rhomboids, and trapezius. The biceps also contribute as secondary muscles. Bent-over rows enhance upper back strength, improve posture, and promote balanced muscle development. Maintaining proper form is crucial to avoid strain on the lower back. Incorporate various grip styles and rowing angles to engage different muscle fibers and maximize results.",
  },
  {
    name: "T-Bar Rows",
    shortDesc:
      "Compound back exercise. Row weight attached to barbell. Targets lats, middle back, biceps.",
    longDesc:
      "T-bar rows are a compound back exercise where you attach weight to one end of a barbell and row it toward your torso. This movement effectively targets the latissimus dorsi, middle back, and biceps while also engaging stabilizing muscles. T-bar rows require a specialized T-bar row machine or a landmine attachment. Proper posture and controlled movements are essential for preventing back strain and ensuring effective muscle engagement. Incorporate T-bar rows to build upper body strength, enhance back width and thickness, and contribute to a well-rounded back profile.",
  },
];

const armsWorkouts = [
  {
    name: "Bicep Curls",
    shortDesc:
      "Isolation exercise. Curl weight with palms facing up. Targets biceps. Enhances arm strength and definition.",
    longDesc:
      "Bicep curls are a classic isolation exercise that targets the biceps muscles. With palms facing up, lift a weight toward your shoulders while keeping your upper arms stationary. Bicep curls isolate and develop the front of the upper arms, contributing to arm strength and definition. Variations include using dumbbells, barbells, or cables. Proper form and controlled movements are crucial to maximize muscle engagement and prevent injury. Incorporating bicep curls in your workout routine can help create well-defined arms and complement other compound exercises for a balanced upper body.",
  },
  {
    name: "Tricep Dips",
    shortDesc:
      "Bodyweight exercise. Lower and lift body using parallel bars. Targets triceps. Builds arm strength and tone.",
    longDesc:
      "Tricep dips are a bodyweight exercise that targets the triceps muscles. Using parallel bars or a dip station, lower your body by bending your elbows, then push back up. Tricep dips effectively engage the back of the upper arms, contributing to strength and toning. Variations include adjusting the intensity by changing body position or using additional weight. Proper form and controlled movements are essential to prevent strain on the shoulders or wrists. Incorporating tricep dips in your routine can help build arm strength, improve muscle definition, and enhance overall upper body aesthetics.",
  },
  {
    name: "Hammer Curls",
    shortDesc:
      "Alternate dumbbell curls. Palms face each other. Targets biceps, forearms. Enhances arm strength and grip.",
    longDesc:
      "Hammer curls are an alternate dumbbell curl variation targeting the biceps and forearms. Unlike traditional curls, your palms face each other throughout the movement. This engagement of the brachialis muscle between the biceps and forearm contributes to increased arm thickness. Hammer curls also enhance forearm strength and grip. The exercise is versatile and can be performed with dumbbells, barbells, or cables. Controlled movements are vital to maximize muscle engagement and prevent wrist strain. Incorporate hammer curls to build bicep and forearm strength, create balanced arm development, and support grip functionality.",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/:muscleID", (req, res) => {
  const muscleGroup = req.params.muscleID;
  const muscleWorkout = muscleGroup.toLowerCase() + "Workouts";
  res.render("muscle", { muscles: eval(muscleWorkout) });
});

app.get("/workout/:workoutID", (req, res) => {
  const workoutID = req.params.workoutID;
  res.render("workout");
});

app.listen(3000, () => {});
