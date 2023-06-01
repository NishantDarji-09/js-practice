"use strict"

// ------------>>  PART - 1 Started  <<------------


/* const numbers = [4,5,8,9,50];

function arrayElement(number, index){
    console.log("index is: ", index);
    console.log(`${number}*2 = ${number*2}`);
}


numbers.forEach(arrayElement);


const users = [
    {firstname: "abc", age: 24},
    {firstname: "def", age: 23},
    {firstname: "ghi", age: 22},
    {firstname: "jkl", age: 21}
]

users.forEach((user)=>{
    console.log(user.firstname);
})



const person = {name: "Nishant", age:22}
console.log(person.name);
console.log(person['name','age']); */

// Map Method

/* const numbers = [4,3,9,10,14,2];

const newnumbers = numbers.map(number=>{
    return number*number;
});

console.log(newnumbers);


const users = [
    {firstname: "abc", age: 24},
    {firstname: "def", age: 23},
    {firstname: "ghi", age: 22},
    {firstname: "jkl", age: 21}
]

const firstnames = users.map(user=>{
    return user['firstname'];
});

console.log(firstnames); */



// filter method 

/* const numbers=[1,2,3,4,5];

const isOdd = function(number){
    return number%2!==0;
}

const result = numbers.filter(isOdd);

console.log(result); */



// reduce method 

/* const numbers = [1,2,3,4,5];

const result = numbers.reduce((acc, cur)=>{
    return acc + cur;
})
console.log(result);



const cart = [
    {productId: 1, productVarient: "Leptop", price: 50000},
    {productId: 2, productVarient: "Mobile", price: 20000},
    {productId: 3, productVarient: "Television", price: 29999}
]

const amount = cart.reduce((totalAmount, currentProduct)=>{
    return totalAmount + currentProduct.price;
},0)

console.log(amount); */

// sort method 

/* const numbers=[5,9,1200, 410, 3000];

// { Ascending Order 
numbers.sort((a,b)=>{
    return a-b;
});
// short method for return a-b 
// numbers.sort((a,b)=>a-b);
console.log('In Ascending Order : '+ numbers);
// } 

// Descending Order {

numbers.sort((a,b)=>{
    return b-a;
})
console.log('In Descending Order : '+ numbers);

// } */

// Realistic Example 
/* const products = [
    {productId: 1, productVarient: "Leptop", price: 49999},
    {productId: 2, productVarient: "Mobile", price: 15000},
    {productId: 3, productVarient: "Washing Machine", price: 18000},
    {productId: 4, productVarient: "AC", price: 42000},
    {productId: 5, productVarient: "Hitter", price: 4000},
    {productId: 6, productVarient: "Television", price: 25000}
]

// Low to High
const result = products.slice(0).sort((product1,product2)=>{
    return product1.price - product2.price;
});
console.log(products);
console.log(result);


// High to Low
const result =  products.slice(0).sort((product1, product2)=>{
    return product2.price - product1.price
});
console.log(products);
console.log(result); */


// find method
/* const lengthArray = ["hello","cat","dog","lion","pig"];

const ans = lengthArray.find(string=>string.length === 3);
console.log(ans);
 */

/* const users = [
    {userID: 1, username: "Harsh"},
    {userID: 2, username: "Raj"},
    {userID: 3, username: "disha"},
    {userID: 4, username: "Tirth"},
    {userID: 5, username: "Kamlesh"},
]

const result = users.find(user=>user.userID===1);
// console.log(result);
console.log(`UserId is ${result.userID}`);
console.log(`UserName is ${result.username}`); */


// fill method

/* const myArray = new Array(10).fill(09);
console.log(myArray); */

// Sets
/* const value = new Set();
value.add(1);
value.add("Nishant");
value.add(3);
value.delete("Nishant");
value.add("Nishant");
if(value.has("Nishant")){
    console.log("true");
} 
else{
    console.log("false");
}
console.log(value); */

// map object 
/* const person = new Map();
person.set('firstName', 'Example');
person.set('age', 24);
person.set(5, 'This is Five');
person.set([1,2,3], 'This is Array Object');
person.set({name: 'Nishant'}, 'This is object literals');

console.log(person);

for (let key of person.keys()){
    console.log(key, typeof key);
}

const person1 = {
    id: 1,
    firstname: "example"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 23, gender: "Male"});
console.log(extraInfo);
console.log(extraInfo.get(person1).gender); */

// clone using Object.assign

/* const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = {...obj1};
const obj2 = Object.assign({}, obj1);
obj1.key3 = "value3";
console.log(obj1);
console.log(obj2); */

// optional chaining
/* const user = {
    name: "Example",
    // address: {houseNumber: '1111'}
}

console.log(user?.name);
console.log(user?.address?.houseNumber); */


// methods:  ----> Function inside Object
// This keyword

/* const person = { 
    name : "Nishant",
    age: 23,
    about: function(){
        console.log(`person name is ${this.name} and age is ${this.age}`);
    }
}
person.about(); */

/* function net(){
    console.log(`person name is ${this.name} and age is ${this.age}`);
}
const person1 = {
    name : "Nishant",
    age: 23,
    about: net
}
person1.about();
const person2 = {
    name : "Harsh",
    age: 25,
    about: net
}
person2.about();
const person3 = {
    name : "Vraj",
    age: 20,
    about: net
}
person3.about(); */

/* const user1 = {
    name :"Nishant",
    age: 23,
    about: function(){
        console.log(this.name, this.age);
    }
}
const user2 = {
    name: "Harsh",
    age: 25
}
user1.about.call(user2); */

// call method

/* function about(hobby, game){
    console.log(this.name, this.age, hobby, game);
}

const user1 = {
    name :"Nishant",
    age: 23,
}
const user2 = {
    name: "Harsh",
    age: 25
}
about.call(user2, "Playing Game, ", "Call Of Duty"); */

// apply method

/* function about(hobby, game){
    console.log(this.name, this.age, hobby, game);
}

const user1 = {
    name :"Nishant",
    age: 23,
}
const user2 = {
    name: "Harsh",
    age: 25
}
about.apply(user2, ["Playing Game, ","Call Of Duty"]); */

// bind method

/* function about(hobby, game){
    console.log(this.name, this.age, hobby, game);
}

const user1 = {
    name :"Nishant",
    age: 23,
}
const user2 = {S
    name: "Harsh",
    age: 25
}
const result = about.bind(user2, "Playing Game,", "Call Of Duty");
result();
 */
/* 
const user1 = {
    name :"Nishant",
    age: 23,
    about: function(){
        console.log(this.name, this.age);
    }
}
 
const myFunc = user1.about.bind(user1);
myFunc(); */

// proto, prototype, class, OOPS.

// __proto__ or [[prototype]]
/* const userMethods = {
    about: function(){
        return `${this.firstname} is ${this.age} years old.`;
    },
    is18: function(){
        return this.age >= 18;
    }
}

function createUser(firstname,lastname,email,age, address){
    const user = Object.create(userMethods);
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
const user1 = createUser("Nishant","Darji", "nishant@gmail.com", "23", "Ahmedabad");
console.log(user1); */

// prototype

/* function hello(){
    console.log("Hello World");
}

hello.prototype.name = "Nishant";
hello.prototype.age = 23;
hello.prototype.address = "Ahmedabad";
console.log(hello.prototype);

if(hello.prototype){
    console.log("prototype is present");
}
else{
    console.log("prototype is not present");
} */

/* function createUser(firstname,lastname,email,age, address){
    const user = Object.create(createUser.prototype);
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstname} is ${this.age} years old.`;
}
createUser.prototype.is18 = function(){z
    return this.age >= 18;
}

const user1 = createUser("Nishant","Darji", "nishant@gmail.com", "23", "Ahmedabad");
console.log(user1);
 */
// new keyword

/* function createUser(firstname, age){
    this.firstname = firstname,
    this.age = age
}
createUser.prototype.about = function(){
    console.log(this.firstname, this.age);
}

const user1 = new createUser("Nishant", 23);
user1.about(); */

// Class Keyword
/* class CereateUser{
    constructor(firstname, lastname, email, age, address){
        // console.log("constructor called");
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstname} is ${this.age} years old`;
    }
    is18(){
        return this.age >= 18;
    }
}
const user1 = new CereateUser("Nishant", "Darji", "nishant@gmail.com", 23, "Ahmedabad");
console.log(user1);
console.log(user1.about());
console.log(`${user1.firstname} is above 18? : ${user1.is18()}`);
const user2 = new CereateUser("Harsh", "Darji", "harsh@gmail.com", 25, "Ahmedabad");
console.log(user2);
console.log(user2.about());
console.log(`${user2.firstname} is above 18? : ${user2.is18()}`);
const user3 = new CereateUser("Tirth", "Darji", "tirth@gmail.com", 12, "Ahmedabad");
console.log(user3);
console.log(user3.about());
console.log(`${user3.firstname} is above 18? : ${user3.is18()}`); */

/* 
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating...`
    }
    isOld(){
        return this.age >= 20 && this.age <= 25;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed} km/h.`
    }
    eat(){
        return `new eat method: ${this.name} is eating...`
    }
}

const sonu = new Dog("sonu",5, 45);
console.log(sonu);
console.log(sonu.run());
console.log(sonu.eat()); */

// Getter and Setter
    // -->  you can use method as a propery without append ()  <--
/* class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    // Without Getter
    // fullname(){
    //     return `${this.name} ${this.surname}`
    // }
    // With Getter
    get fullname(){
        return `${this.name} ${this.surname}`
    } 

    set fullName(fullName){
        const [name, surname] = fullName.split(" ");
        this.name = name;
        this.surname = surname;
    }
}

const person1 = new Person("Nishant", "Darji");
// console.log(person1.fullname()); <-- Without Getter
console.log(person1.fullname); // <-- With Getter
person1.fullName = "Harsh Darji";
console.log(person1.fullname); */




// ------------>>  PART - 3 Started  <<------------

// synchronous programming vs asynchronous programming
// synchronous programming

// Promises

/* const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const friedRice = new Promise((resolve, reject) => {
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        resolve("your promise is resolved");
    }
    else{
        reject(console.error("your promise is rejected"));
    }
})
 
// friedRice.then((rice)=>{
//     console.log(rice)
// // }, (error)=>{
// //     console.log(error);
// })

friedRice.then((rice)=>{
    console.log(rice)
// }, (error)=>{
//     console.log(error);
}).catch((error)=>{
    console.log(error);
}) */

// return promise with function 

/* const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

function rice(){
    return new Promise((resolve, reject) => {
        if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
            resolve("your promise is resolved");
        }
        else{
            reject(console.error("your promise is rejected"));
        }
    })
}

rice().then((rice)=>{
    console.log(rice)
// }, (error)=>{
//     console.log(error);
}).catch((error)=>{
    console.log(error);
}) */

// prmise with setTimeout 
/* function rice(){
    return new Promise((resolve, reject) => {
        const value = true;
        if(value){
            resolve();
        }
        else{
            reject();
        }
    })
}

rice().then(()=>{
    console.log("resolved");
}).catch(()=>{
    console.log("rejected");
}) */


// promise chaining 
/* function myPromise(){
    return new Promise((resolve, reject)=>{
        resolve("foo");
    })
}

myPromise().then(value=>{
    console.log(value);
    value += "bar"
    return value;
})
.then(value=>{
    console.log(value);  
    value += "baaz"
    return value;
})
.then(value =>{  
    console.log(value); 
}) */
 


// AJAX ======> Asynchronous Javascript and XML
