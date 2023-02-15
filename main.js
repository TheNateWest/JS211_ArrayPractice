let cars = ['Ford', 'BMW', 'Mercedes', 'Lexus'];
let carsLength = cars.length;
console.log(`1. length of cars is ${carsLength}`);

// console.log(cars.length);

let moreCars = ['Jeep', 'Audi', 'Subaru', 'Honda']
let totalCars = cars.concat(moreCars)
console.log(`2. concat both arrays ${totalCars}`);
console.log(totalCars);

console.log(`3. Index of Honda is ${totalCars.indexOf('Honda')}`);
console.log(`4. Index of Ford is ${totalCars.lastIndexOf('Ford')}`);

let stringOfCars = totalCars.join(" , ");
console.log(`5. Joined cars are ${stringOfCars}`);
console.log(stringOfCars);
// console.log(totalCars.join());

let carsFromString = stringOfCars.split("' , '");
console.log(`6. Split cars are ${carsFromString}`);
console.log(carsFromString);

let carsInReverse = totalCars.reverse();
console.log(`7. Reversed cars are ${carsInReverse}`);
console.log(carsInReverse);

let sortedReversedCars = carsInReverse.sort();
console.log(`8.Sorted cars are ${sortedReversedCars}`);
console.log(sortedReversedCars);


const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
console.log(`9. Pets are ${pets}`);
console.log(pets);

let reptiles = pets.slice(4, 6);
console.log(`10. Reptiles are ${reptiles}`);
console.log(reptiles);

let removedReptiles = pets.slice(4, 5);
console.log(`11. Pets without reptiles are ${removedReptiles}`);
console.log(removedReptiles);

// let removedPet = pets.pop("")
// console.log('12. Take away the last pet is ${removedPet}');

// pets.push(removedPet)

// pets.shift(0)

// pets.unshift('turtle')

// const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]

// function addTwo(num, index, arr) {
//     arr[index] = num + 2;
// }

// numbers.forEach(addTwo)

// console.log(numbers)











// totalCars = totalCars.split(" ")
// console.log(totalCars)

// let carsInReverse = totalCars.reverse()
// console.log(carsInReverse)


// carsInReverse = carsInReverse.sort()
// console.log(carsInReverse)