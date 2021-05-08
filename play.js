const fname = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

// standard functions and arrow functions
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
}
console.log(summarizeUser(fname, age, hasHobbies));

const add = (a, b) => a + b;
console.log(add(1, 2));

const addOne = a => a + 11;
console.log(addOne(1));

const randomAdd = () => 1 + 2;
console.log(randomAdd());


// Objects
const person = {
    fname: 'Max',
    age: '26',
    greet() {
        console.log('Hi my name is ' + this.fname);
    }
};

person.greet();

// Arrays
const hobbies = ['Sports', 'Cooking'];
for (let hobby of hobbies) {
    console.log('hobbies for loop= ' + hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies)

// Spread Operator used for copying the properties of an array or an object
const copiedArray = [...hobbies];
console.log(copiedArray);

// Rest Operator
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4, 5));


// Destructuring
const person2 = {
    firstName: 'Lewis',
    currentAge: 27,
    greet() {
        console.log('Hi, I am ' + this.fname);
    }
};

const printName = ({ firstName, currentAge }) => {
    console.log(firstName + currentAge);
}

printName(person2);

const { firstName, currentAge } = person2;
console.log(firstName + currentAge);

// Array Destructuring
const things = ['apple', 'Bananas'];
const [things1, things2] = things;
console.log(things1, things2);