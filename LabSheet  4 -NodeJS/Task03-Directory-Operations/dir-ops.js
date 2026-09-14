const fs = require("fs");

const folder = "uploads";

fs.mkdir(folder, { recursive: true }, (err) => {
  if (err) return console.error("Error creating folder:", err);
  console.log("uploads folder created.");

  fs.writeFile(`${folder}/file1.txt`, "", (err) => {
    if (err) return console.error(err);
    fs.writeFile(`${folder}/file2.txt`, "", (err) => {
      if (err) return console.error(err);
      fs.writeFile(`${folder}/file3.txt`, "", (err) => {
        if (err) return console.error(err);
        console.log("Three files created.");

        fs.readdir(folder, (err, files) => {
          if (err) return console.error(err);
          console.log("\nFiles in uploads:");
          console.log(files);

          fs.unlink(`${folder}/file2.txt`, (err) => {
            if (err) return console.error(err);
            console.log("\nfile2.txt deleted successfully.");
          });
        });
      });
    });
  });
});
