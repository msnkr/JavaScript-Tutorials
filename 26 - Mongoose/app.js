// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
  const fluffy = new Kitten({ name: "Fluffy" });

  fluffy.speak();
  silence.speak();

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
}
