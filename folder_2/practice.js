let stringOne = "APS is the best place to learn ";
let stringTwo = "frontend and backend development";


//caharAt()
console.log(stringOne.charAt(4));
this methods is recive number and ouput 


//charCodeAt()
console.log(stringTwo.charCodeAt(3));


//concat()
console.log(stringOne.concat(stringTwo));
console.log(stringTwo.concat(stringOne));


//endsWith()
console.log(stringOne.endsWith(" "));
console.log(stringTwo.endsWith("development"));
console.log(stringTwo.endsWith("end"));

//fromCharCode()
console.log(String.fromCharCode(120));

//indcludes()
console.log(stringTwo.includes("and"));
console.log(stringTwo.includes("first"));

//indexOf()
console.log(stringOne.indexOf("learn"));

//lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));

//match()
console.log(stringTwo.match(/end/g));

//repeat()
console.log(stringTwo.repeat(4));

//replace
console.log(stringTwo.replace("end" , "END"));

//serach()
console.log(stringTwo.search("end"));

//slice()
console.log(stringTwo.slice(5 , 8));

//split()
console.log(stringTwo.split(5 , 8));

//startWith()
console.log(stringOne.startsWith("AP"));

//substr()
console.log(stringTwo.substr(2,6));

//subsring()
console.log(stringTwo.substring(2,6));

//toLowerCase()
console.log(stringOne.toLocaleLowerCase());

//toUpperCase()
console.log(stringOne.toLocaleUpperCase());

//trim() 
let conversation = "      hello are you ok?      "
console.log(conversation.trim());

let number =Math.random()*100
console.log(number);
console.log(Math.round(number));
let num = Math.floor(Math.random()*100);
console.log(num);
let sum = Math.pow(2,3)
console.log(sum);