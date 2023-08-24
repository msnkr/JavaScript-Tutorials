// getting-started.js
// const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");

//   const kittySchema = new mongoose.Schema({
//     name: String,
//   });

//   kittySchema.methods.speak = function speak() {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   };

//   const Kitten = mongoose.model("Kitten", kittySchema);

//   const silence = new Kitten({ name: "Silence" });
//   const fluffy = new Kitten({ name: "Fluffy" });

//   fluffy.speak();
//   silence.speak();

//   const kittens = await Kitten.find();
//   console.log(kittens);
//
//   const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     address: String,
//     married: Boolean,
//   });

//   const User = mongoose.model("User", userSchema);

//   const newUser = new User({
//     name: "John",
//     age: 32,
//     address: "32 Sunset Blvd",
//     married: false,
//   });

//   console.log(newUser);
// }

// const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/person");

//   const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//   });

//   const Person = mongoose.model("Person", personSchema);
//   const john = new Person({ name: "john", age: 37 });
//   const peter = new Person({ name: "peter", age: 27 });
//   const angela = new Person({ name: "angela", age: 32 });

//   // Person.insertMany([john, peter, angela]);

//   const peopleDB = await Person.find();
//   peopleDB.forEach((person) => {
//     console.log(person.name);
//   });

//   mongoose.connection.close();
// }

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fruit");

  const fruitSchema = mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);
  const apple = new Fruit({
    name: "Apple",
    rating: 5,
    review: "I love apples",
  });

  const orange = new Fruit({
    name: "Orange",
    rating: 3,
    review: "Peeling is tough",
  });

  const peaches = new Fruit({
    name: "Peaches",
    rating: 4,
    review: "Peaches and cream. Yummy",
  });

  const litchi = new Fruit({
    name: "Litchi",
    rating: 5,
    review: "A bit messy but great",
  });

  // await Fruit.insertMany([apple, orange, peaches, litchi]);

  const fruitDB = await Fruit.find();
  fruitDB.forEach((fruit) => {
    console.log(fruit.name);
  });

  mongoose.connection.close();
}
