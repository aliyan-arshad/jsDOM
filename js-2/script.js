// LOOPS

// console.log("JAWA-SCRIPT LOOPS")

// WHILE LOOP
// let num =1;
// while(num<=10){
//     console.log(num);
//     num++;
// }
// console.log("JAWA-SCRIPT LOOPS")
// DO WHILE LOOP
//     console.log("DO While LOOP")
// let num =1;
// do{
//     console.log(num);
//     num++;
// }while(num <=10)
// console.log("JAWA-SCRIPT LOOPS")
//  console.log("For loop")
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// TABEL JS

// var num =1;
// while(num<=10){
//     console.log('5 * ' + num  + ' = ' + 5 * num);
//     num++;
// }



// JS FUNCTIONS 

// function first(){
//     console.log("Good Morning")
// }
// function sec(){
//     console.log("Good Evening")
// }
// sec();
// first();


// CALL BACK 
// function display(x){
//     document.getElementById("some").innerHTML=x;
// }
// function calculate(num1 , num2){
//     let sum= num1 + num2;
//     return sum;
// }
// let result = calculate(14,80);
// display(result);

// function displayData(data) {
//     document.getElementById("ide").innerHTML = data;
// }
// function calculate(num1, num2) {
//     let sum = num1 * num2;
//     displayData(sum);
// }
//  calculate(12, 10);

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);
// function love(){
//     console.log("I love You")
// }
// setTimeout(() => {
//     love()
// }, 3000);


// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }


// JS PROMICES
// let ans = new Promise((resolve, reject) => {
//   let n = Math.floor(Math.random()  * 10);
//   if(n>5){
//     return resolve();
//   }
//   else{
//     return reject();
//   }
// })
// ans
// .then(function(){
//   console.log("Grater Then 5");
// })
// .catch(function(){
//   console.log("Less Then 5");
// })


// js promices


// sab sa phalay ghar pa aaao
// gate kholo or gate band kro
//khana pkao or khana khao
// sojao bhai ab tum thak gay ho

// let ans = new Promise((resolve, reject) => {
//   return resolve("Sab sa phalay ghar pa aao"); //peomise no 1
// })
// let p2=ans.then(function (data){
//   console.log(data)
//   return new Promise((resolve, reject) => {  //promice 2 when 1st is resolved it creat better  
//                                                // control over code ans task will perform in a siquance
//     return resolve("Gate kholo Or gate Lagao");
//   })
// })
// let p3 = p2.then(function(data){
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     return resolve("Khana pkao or khana khao");
//   })
// })
// p3.then(function(data){
//   console.log(data)
// })
// let p4= p3 = p2.then(function(data){
//   console.log(data);
//   return new Promise((resolve, reject) => {
//     return resolve("Sojao bhai ap thak gay ho gay");
//   })
// })
// p4.then(function(data){
//   console.log(data)
// })

// har bar then laga sa bachna ka lia ham async await ka use karta han 
//isko likhta time function say phalay async likhna ha or 


//normal function 
// function name(params) {
//    fetch(" ") // ya fetch ksi api sa data la k ata ha jo ka row form ma hota ha us data ko read able form ma  convert karna ka lia     jason use karta han (raw.json)
//   .then(function(raw){
//    return  raw.json()
//   })//is ka bad ak or then lagana parta ha jis sa real data milta ha jo read able hota ha
//   .then(function(data){
//     console.log(data)
//   })
// }
//asinc aWait function
async function acb() {
   let raw = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
   // ya fetch ksi api sa data la k ata ha jo ka row form ma hota ha 
   //jab b koi code async ha to apko uska lia wait karna parta ha q ka hma nhi pata uska ans kab aye ga
   //ana wala data ko readable form ma  convert karna ka lia  jason use karta han (raw.json)
   let ans= await raw.json();
   console.log(ans)
}
acb();










// api 
//api ak asa system ha jo dosra server sa data lana ka liay request bhaj saktay han 
//let promise fetch api (url , [options])