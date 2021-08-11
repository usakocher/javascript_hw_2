// Question #1

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/  

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

for (let i=0;i<Object.keys(person3).length;i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(`Person's favorite ${Object.keys(person3)[i]}: `)
        console.log(Object.values(person3)[i])
    }else{
        console.log(`Person's favorite ${Object.keys(person3)[i]}: `)
        console.log(Object.values(person3)[i])
    }
}

// Question #2

/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        return `The Person's name is ${this.name} and they are ${this.age} years old.`
    }

    addAge = (num) =>{
        return this.age += num
    }
}

let jennifer = new Person('Jennifer', 20);
let james = new Person('James', 34);
console.log(jennifer.printInfo())
console.log(james.age)
james.addAge(3)
console.log(james.age)

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordLength = (s) =>{
    return new Promise( (resolve, reject) => {
        if(s.length > 10){
            resolve(true)
        }else{
            reject(false)
        }
    } )
};

wordLength('Elevletters').then( (result) => {
    console.log('Big word')
} ).catch( (error) => {
    console.log('Small Number')
} )

wordLength('Tenletters').then( (result) => {
    console.log('Big word')
} ).catch( (error) => {
    console.log('Small Number')
} )