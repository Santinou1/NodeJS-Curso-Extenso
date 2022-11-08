const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./data/bigFile.txt", "Hello World".repeat(1000000));
};

createBigFile()
/* const {createReadStream}= require("fs")



const stream=createReadStream("./data/bigFile.txt","utf-8")
console.log(stream)

stream.on("data",(chunk)=>{
    console.log(chunk)
})

stream.on("end",()=>{
    console.log("Succes!!!!!!!!!!")
})

stream.on("error",(error)=>{
    console.log(error)
}) */