const fs = require("fs");

// const first= fs.readFileSync("./data/first.txt","utf-8") //lee el archivo que vos le escribas, y de segundo parametro elegis que codificacion queres

// const title= "soy un titulo a travez de variable"

// fs.writeFileSync("./data/fourd.txt", title) //Crea un archivo en la ruta que vos le pongas con el nombre que vos le pongas


//----------------------------------------------------------------------------------------------
//No hay que hacer codigo asi! Porque se realiza el famoso Callback Hell

/* fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) console.log(error);
  console.log(data);
  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) console.log(error);
    console.log(data);
  });
  fs.writeFile(
    "./data/async.txt",
    "probando lasfunciones sync",
    (error, data) => {
      if (error) console.log(error);
      console.log(data);
    }
  );
}); */

//-----------------------------------------------------------------------------------------


