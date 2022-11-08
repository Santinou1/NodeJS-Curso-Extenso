const os= require ("os")

console.log("PLATFORM",os.platform()) //Te dice en que S.O estas
console.log("USERINFO" , os.userInfo()) // Te da info del usuario de la pc
console.log("TOTALMEM",os.totalmem()) // Te dice el total de memoria disponible
console.log("FREEMEM",os.freemem()) // Te dice la cantidad de memoria que se esta utilizando en vivo

