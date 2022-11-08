const { readFile } = require("fs/promises");

//const getText = (pathFile) => {
// return new Promise(function (resolve, reject) {
//   readFile(pathFile, "utf-8", (err, data) => {
//     if (err) {
//       reject(err);
//     }

//     resolve(data);
//   });
// });
//};

// getText("./data/second.txt")
// .then((data)=> console.log(data))
// .then(()=> getText("./data/third.txt"))
// .then((data)=>console.log(data))
// .catch(error => console.log(error))

async function read() {
  try {
    const result = await readFile("./data/first.txt", "utf-8");
    const result1 = await readFile("./data/second.txt", "utf-8");
    const result2 = await readFile("./data/async.txt", "utf-8");
    const result3 = await readFile("./data/third.txt", "utf-8");
    console.log(result);
    console.log(result1);
    console.log(result2);
    console.log(result3);
  } catch (err) {
    console.log(err);
  }
}

read();
