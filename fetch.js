import fetch from 'node-fetch';


const loadData =  async () => {
const res= await fetch("https://jsonplaceholder.typicode.com/posts")
const data= await res.json()
console.log(data)

};

loadData()