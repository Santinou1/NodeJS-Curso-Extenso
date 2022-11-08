const path = require("path");

const filePath= path.join("/public","dist","/styles","main.css")


console.log(path.basename(filePath)) // te da el nombre del archivo
console.log(path.dirname(filePath)) //te da la ruta entera menos el archivo 
console.log(path.parse(filePath))  // parsea la info a un objeo
console.log(path.resolve("dist")) //crea la ruta desde donde estas parado