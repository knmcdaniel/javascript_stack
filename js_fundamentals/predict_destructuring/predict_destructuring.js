
//Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //The Output is Tesla
console.log(otherRandomCar) //The Output is Mercedes



//Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); //This causes an error because 'name' is not defined.
console.log(otherName); //The output is Elon


//Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //This output is '12345'
console.log(hashedPassword); //The output is "undefined"


//Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //The output is False
console.log(first == third); //The output is True

//Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //The output is 'value'
console.log(secondKey); //The output is  [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // The output is 1
console.log(willThisWork); //The output is 5


