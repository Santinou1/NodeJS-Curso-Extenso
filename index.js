// let username= "Santi"
// let ages= 30
// let hasHobbies= false
// let points= [10,20,30]
// let user={
//     name:"santi",
//     lastname:"ursino"

// }
// const PI= 3.1415

// console.log(username)
// console.log(age)
// console.log(hasHobbies)
// console.log(username)
// console.log()

const age=1

if(age>=18){
    console.log("sos mayor")
}else if(age>=13){
    console.log("sos un wuachin")
} else{
    console.log("sos un nenene")
}

 const names=["joe","john","marcos"]

for (let i = 0; i < names.length; i++) {
console.log(names[i])    
} 

function showUserInfo(userName, userAge) {
  return `El usuario se llama ${userName} y tiene ${userAge} años`;
}

console.log(showUserInfo("Santi", 30));
 