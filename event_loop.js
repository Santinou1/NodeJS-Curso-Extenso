const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to the sv");
    return res.end();
  }

  if (req.url === "/about") {
    //blocking code
    // for (let i = 0; i < 100000; i++) {
    //   console.log(Math.random() * i);
    // }

    res.write("welcome to the about");
    return res.end();
  }

  res.write("not found");
  return res.end();
});

server.listen(3001);
console.log("server en el puerto 3001");
