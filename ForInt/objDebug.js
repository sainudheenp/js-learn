// const car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     getCarInfo: function() {
//         return `${this.brand} ${this.model} (${this.year})`;
//     }
// };

// function displayCarInfo(prefix) {
//     console.log(`${prefix}: ${this.getCarInfo()}`);
// }

// const carInfo = car.getCarInfo.bind(car);
// console.log(carInfo()); // Question 1

// displayCarInfo(car,'Car'); // Question 2

// const displayCar = displayCarInfo.bind(car);
// displayCar('Car'); // Question 3

// const anotherCar = {
//     brand: 'Honda',
//     model: 'Civic',
//     year: 2018
// };

// displayCarInfo.call(anotherCar, 'Another Car'); // Question 4

// displayCarInfo.apply(anotherCar, ['Another Car']); // Question 5

// const anotherCarInfo = car.getCarInfo.bind(anotherCar);
// console.log(anotherCarInfo()); // Question 6

// const yetAnotherCar = {
//     brand: 'Ford',
//     model: 'Focus',
//     year: 2019,
//     getCarInfo: car.getCarInfo
// };

// console.log(yetAnotherCar.getCarInfo()); // Question 7

// const brokenCar = {
//     brand: 'Unknown',
//     model: 'Unknown',
//     year: null,
//     getCarInfo: function() {
//         return `${this.brand} ${this.model} (${this.year})`;
//     }
// };

// console.log(brokenCar.getCarInfo()); // Question 8

// const displayBrokenCar = displayCarInfo.bind(brokenCar);
// displayBrokenCar('Broken Car'); // Question 9

// const displayUndefinedCar = displayCarInfo.bind();
// displayUndefinedCar('Undefined Car'); // Question 10


// --- New Code: Revised Version ---

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    getCarInfo: function() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};

function displayCarInfo(prefix) {
    console.log(`${prefix}: ${this.getCarInfo()}`);
}

// Q1: Using bind correctly
const carInfo = car.getCarInfo.bind(car);
console.log(carInfo()); // "Toyota Corolla (2020)"

// Q2: Corrected by using call to set the context to 'car'
displayCarInfo.call(car, 'Car'); // "Car: Toyota Corolla (2020)"

// Q3: Already correct using bind
const displayCar = displayCarInfo.bind(car);
displayCar('Car'); // "Car: Toyota Corolla (2020)"

// For anotherCar, we now add getCarInfo by borrowing it from car
const anotherCar = {
    brand: 'Honda',
    model: 'Civic',
    year: 2018,
    getCarInfo: car.getCarInfo // Borrow the method
};

// Q4: Now works because anotherCar has getCarInfo
displayCarInfo.call(anotherCar, 'Another Car'); // "Another Car: Honda Civic (2018)"

// Q5: Using apply works as well
displayCarInfo.apply(anotherCar, ['Another Car']); // "Another Car: Honda Civic (2018)"

// Q6: Bind car.getCarInfo to anotherCar (works similarly)
const anotherCarInfo = car.getCarInfo.bind(anotherCar);
console.log(anotherCarInfo()); // "Honda Civic (2018)"

const yetAnotherCar = {
    brand: 'Ford',
    model: 'Focus',
    year: 2019,
    getCarInfo: car.getCarInfo
};

console.log(yetAnotherCar.getCarInfo()); // "Ford Focus (2019)"

const brokenCar = {
    brand: 'Unknown',
    model: 'Unknown',
    year: null,
    getCarInfo: function() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
};

console.log(brokenCar.getCarInfo()); // "Unknown Unknown (null)"

// Q9: Bind displayCarInfo to brokenCar
const displayBrokenCar = displayCarInfo.bind(brokenCar);
displayBrokenCar('Broken Car'); // "Broken Car: Unknown Unknown (null)"

// Q10: Instead of binding with no context, bind to a default object that provides a fallback
const defaultCar = {
    getCarInfo: function() {
        return "No car info available";
    }
};

const displayDefinedCar = displayCarInfo.bind(defaultCar);
displayDefinedCar('Defined Car'); // "Defined Car: No car info available"
