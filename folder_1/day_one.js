let relax = 50;
let sport = 80;
console.log(relax , sport);


//string

let name = 'mehdi';
console.log(name);


//string concatenation
let firstName = 'mehdi';
let lastName = 'azimi';

let fullName = firstName + ' ' + lastName;
console.log(fullName);


// getting charcters
console.log(fullName[6]);


// string length
console.log(fullName.length);


// string methods
let actor = 'nicolasCage'
console.log(actor.toUpperCase());

let bigName = actor.toLowerCase();

console.log(bigName , fullName);
let sort = actor.indexOf('s');
console.log(sort);

let email = 'mehdiazimi@gmail.com';
let result = email.lastIndexOf('z');


console.log(result);
let myEmail = email.slice(2,13);
console.log(myEmail);


let mark = email.substr(2,13);
console.log(mark);


let change = email.replace('m' , 'M');
console.log(change);


let changes = email.replaceAll('m' , 'M');
console.log(changes);


///numbers
const radius = 10;
const pi = 3.14;
console.log(radius , pi);


// math operators
console.log(10 / 2);
let goal = radius % 3;
console.log(goal);
let double = radius **2;
console.log(double);


//order of operation - B I D M A S
let result = 5 * (10-3)**2;
let newResult = (5 * (10-3))**2;
console.log(result);
console.log(newResult);

let like = 10;
like ++;
console.log(like);
like = like + 1;
console.log(like);
like += 10;
console.log(like);
like -= 5;
console.log(like);
like *= 2;
console.log(like);
like /= 2;
console.log(like);


// teplate string
const title = 'best reads of 2019';
const author = 'mario';
const likes = '30';

// concatenation way
let concatResult = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(concatResult);


// template string way
let templResult = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(templResult);


//Arrays
 let netNinja = ['shaun', 'ryu', 'chun-li'];
// console.log(netninja);
// console.log(netninja[0]);
netninja[3] = 'brandon';
netninja[1] = 'crystal';
console.log(netninja);
console.log(netninja.length);


// array methods
let goal = netNinja.join(',');
console.log(goal);

let result = netNinja.lastIndexOf('ryu');
console.log(result);

let result = netNinja.concat(['ken' , 'crystal']);
console.log(result);

let result = netNinja.push('ken');
result = netNinja.pop();
console.log(result);
console.log(netNinja);


// nul and undefined
let age;
console.log(age, age + 3, `the age is ${age}`);
let arad = null;
console.log(arad, arad + 8 , `the arad is ${arad}`);


//booleans & comprisons
console.log(true, false, "true", "false");


//methods can return booleans
let email = 'mehdiaz@gamil.com';
let result = email.includes('@');
let goal = email.includes('s');
console.log(result , goal);
let arr = ['ali', 'reza', 'hamed'];
let select = arr.includes('hasan');
console.log(select);

// comprison operators
let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

let heart = 'shaun';
console.log(heart == 'shaun');
console.log(heart == 'Shaun');
console.log(heart > 'crystal');
console.log(heart > 'shaun');
console.log(heart > 'Crystal');


// loose camparison (different types can still be equal)
let width = 70;
console.log(width == 70);
console.log(width == '70');
//
console.log(width != 70);
console.log(width != '70');

//strict comparison
console.log(width === 70);
console.log(width === '70');
console.log(width !== 70);
console.log(width !== '70');



//////floder 3
//for loops
for(let i = 0 ; i < 5 ; i++){
    console.log(`in loop :` , i);
}
console.log('loop finished')

const names = ['shaun' , 'mario' , 'luigi'];

for(let i = 0 ; i < names.length ; i++){
    console.log(names[i]);
}

const name = ['shaun' , 'mario' , 'luigi'];

for(let i = 0 ; i < name.length ; i++){
   let html = `<div>${name[i]}</div>`
   console.log(html);
}


//while
let i = 0;
while(i < 5){
    console.log(`in lopp:` , i);
    i++;
}

const names = ['shaun' , 'mario' , 'luigi'];
let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

// if statements
const age = 25;
if(age > 20){
    console.log('you are over 20 years old');
}

const password = 'p@ss'
if(password.length >= 8){
    console.log('that password is long enough!');
}else {
    console.log('password is not long enough');
} 

const password = 'p@ssword1234';
if(password.length >= 12){
    console.log('that password is mighty strong');
}else if(password.length >= 8){
    console.log('password is  long enough');
} else {
    console.log('password is not long enough')
}


// logical opertors - or--> || // and--> &&

const password = 'psswoed1234'
if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that passwod is strong enough!');
}else {
    console.log('password is not strong enough');
}