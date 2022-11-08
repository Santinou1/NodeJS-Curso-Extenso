const http = require("http");

const server=http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req); //Informacion del request del cliente

    if (req.url === "/") {
      res.write("welcome to the server");
      return res.end();
    }

    if (req.url === "/about") {
      //Si la url es about te va a mostrar about me
      res.write("about me");
      return res.end(); //El return es muy importante debido que si no esta, va a renderizar el About me cuando este en la ruta pero despue va a intentar escribir el hello world y se va a romper. Entonces con el return cortas la funcion una vez que se ejecute el mismmo
    }

    res.write(`
    <h1> NOT FOUND </h1>
    <p> esta pagina no se encontro <p>
    <a href="/"> Volver al menu Principal </a>
    `);
    res.end();
  })
  server.listen(3001);

console.log("Servidor escuchando en el puesto 3000");
