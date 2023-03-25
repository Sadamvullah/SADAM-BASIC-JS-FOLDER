// javacript is a dyna,ic typing languages
/*multiple line commands
solo
hacker*/

//command line

alert('sadam');

/* undefined*/
let name;
console.log(name);

let a = 5;
let b = 10;
let result = a * b;
console.log(result);

/*
 VARIABLES rules:
1.NO JAVASCRIPT KEYWORDS NAME;
2.SHOULD NOT START WITH NUMBER
3.NO SPACE & NO -
4.ITS CASE SENSITIVE
5.USE MEANINGFUL NAMES
*/

//variables var,let,const.........
//let change for a element
//const it is not change for a varaible --just one time it is permanent

//const sad = "sadam"; 
let sad = "sadam";
sad = "sadamvullah.i"
let hi = "HELLO MY NAME IS" + sad + "i am learing js";
console.log(hi);

/*DATA TYPES 
THEY ARE TWO TYPES
primitive types ....STRING,INTEGER/NUMBER,BOOLEAN,UNDEFINED,NULL
reference types ....OBJECT,ARRAY,FUNCTION
*/

let NAME = 'sadam';  //string

let age = '21';    //integer

let isyoung = 'true';  //boolean

let NO; //UNDEFINED

let trophy   //null

//object
let person = {}
//key:"value"
// empty object

console.log(person)
//dot notation
console.log(person.name)

let persons = {
  gender: "male"
}
console.log(persons['gender'])

//array
let favcolors = ["red", "white", "black", "blue"]
//empty.array

console.log(favcolors[0])

// function
function greatuser() {
  //set of statements
  console.log()
}

//operators 
/* they are five operators
*/
//arithmetic operators +,-,/,*.%.**
let num1 = 10;
let num2 = 15;
console.log(num1 + num2)

//assignment operator
let x = 5;
x = x + 2
console.log(x);

//comparison operator
console.log(1 > 5);

let y = 5;
//equality operator
console.log(y === 5);
console.log(y !== 5);

// string comparism
console.log('aa' > 'bb');

// strict, lose Equality operator 
console.log("1===1");

//ternary operator
/* small practical*/
let ages = 16;
let type = ages > 18 ? "adult ticket" : "child ticket"
console.log(type);

//logical operator they are three types AND,OR,NOT

/*bitwise operators                             referred by google rapid tables ...convert decimal to binary 
human code->machine code(0,1)                   
1-> 000000001->1
*/
console.log(1 & 2);

//operator precedence
let z = (2 + 5) * 10
console.log(z);

//conditional statement
//they are two types if else,switch case

//if else
let condition = true;
if (condition)
  console.log("condition:true");
else
  console.log("condition:false");

//switch case
/*let garde = "A";
switch (grade){
  case "A":
    console.log("A grade");
  case "B":
    console.log("B grade");
}*/

//loops they are three types for,while,do

for(let i=1;i<6;i++){
  
  if(i%2 !==0){
  console.log("odd number #" +i);
}
}

/*do{
  if(i%2 !==0){
    console.log("odd number #" +i);
  }
  i--;
}while(i>=1);
*/
//for in loop
let colors=['red','blue','green'];

for(let key in colors){
  console.log(colors[key]);
}

//infinitive loops
//for(;;)                                            IMPORTANT
//console.log("this is infinitive loop");


//dynamic nature of objects

const paro ={
  name:"sadam"
}
console.log(paro);

paro.age=24;
paro.greetings=function(){}

const numbers=[4,5,6]
console.log(numbers);

const numberss=["apple","lemon","orange"]
console.log(numberss[2]);

//adding element to js array
const numbeerss=["apple","lemon","orange"]
//push
numbeerss.push("guava","grapes")
//unshift
numbeerss.unshift("watermelon")
//splice
//numbeerss.splice("bananas")
console.log(numbeerss)
//finding element
console.log(numbeerss.includes("guava"))

//removing array 
const nums=["apple","lemon","orange"]
nums.pop()
console.log(nums)

// empty array
let numss=[1,2,3,4];
numss=[];
console.log(numss);


