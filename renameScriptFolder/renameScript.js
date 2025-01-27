const fs = require("fs");

const randomGenerator = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let fileName = "";

  for (let index = 0; index < 8; index++) {
    let randomIndex = Math.floor(Math.random() * alphabet.length);
    fileName += alphabet[randomIndex];
  }
  return `${fileName}.jpg`;
};

fs.readdir("./", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      if (file.endsWith(".jpg")) {
        fs.rename(file, randomGenerator(), (err) => {
          if (err) {
            console.log("err");
          } else {
            console.log("All Renamed");
          }
        });
      }
    });
  }
});
