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

