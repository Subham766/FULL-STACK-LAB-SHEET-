const fs = require("fs");

const studentFile = "student.txt";
const profileFile = "profile.txt";

fs.writeFile(
  studentFile,
  "Name: Subham \nRoll Number: 57\n",
  (err) => {
    if (err) return console.error("Error writing file:", err);
    console.log("student.txt created successfully.");

    fs.appendFile(
      studentFile,
      "Course: Full Stack Web Development\n",
      (err) => {
        if (err) return console.error("Error appending file:", err);
        console.log("Course name appended successfully.");

        fs.readFile(studentFile, "utf8", (err, data) => {
          if (err) return console.error("Error reading file:", err);
          console.log("\nFile Content:");
          console.log(data);

          fs.rename(studentFile, profileFile, (err) => {
            if (err) return console.error("Error renaming file:", err);
            console.log("File renamed to profile.txt successfully.");
          });
        });
      }
    );
  }
);
