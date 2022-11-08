const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (data,secondData) => { //El evento on sirve para estar en modo escucha para asi poder recibir informacion
  console.log("received");
  console.log(data);
  console.log(secondData);
});

customEmitter.emit("response", "Hello World","prueba"); //El evento emit envia la informacion al evento que este escuchandose
customEmitter.emit("response", "Santi");
customEmitter.emit("response", 30);
customEmitter.emit("response", "Hello World");
customEmitter.emit("response", {
  name: "santi",
  apellido: "ursino",
});
