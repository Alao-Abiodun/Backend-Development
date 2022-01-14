// For loop structure
// for(initialization, condition, increment/decrement){
//     // code goes here
//   }

//   let i = 1;

// print 0 - 10
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// print 10 - 0
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// while loop
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// do while loop
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for of

// let arr = Array();

// console.log(arr);

// let newArr = ["string", true, 12, 3.45, undefined, null, ["another arra"]];
// console.log(newArr);

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

// console.log("Numbers:", numbers);
// console.log("Number of numbers:", numbers.length);

// console.log("Fruits:", fruits);
// console.log("Number of fruits:", fruits.length);

// console.log("Vegetables:", vegetables);
// console.log("Number of vegetables:", vegetables.length);

// console.log("Animal products:", animalProducts);
// console.log("Number of animal products:", animalProducts.length);

// console.log("Web technologies:", webTechs);
// console.log("Number of web technologies:", webTechs.length);

// console.log("Countries:", countries);
// console.log("Number of countries:", countries.length);

// const anyDatatypes = ["string", 4.3, true, { name: "biodun" }, ["another"]];
// // for (const element of arr) {
// //     // code goes here
// //   }
// i++ == i + 1
// i-- == i -1
// --i
// ++i
// let i = 0;
// console.log(i++); // console.log(i)
// console.log(++i);
// const numbers = [2, 4, 6, 8];
// let sum = 0;
// for (const i of numbers) {
//   sum += i;
// }
// console.log(sum);

// let numLength = numbers.length;
// for (let i = 1; i < numLength; i++) {
//   sum += numbers[i];
//   //   console.log(sum);
// }
// console.log(sum);

// const webTechs = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Redux",
//   "Node",
//   "MongoDB",
// ];

// for (const tech of webTechs) {
//   //   console.log(tech.toUpperCase());
//   if (tech.includes("c")) {
//     console.log(tech.toUpperCase());
//   }
// }

// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }

// // 0 1 2

// for (let i = 0; i <= 10; i++) {
//   //   console.log(`${i} * ${i} = ${i * i}`);
//   //   console.log(`${i} ${i} = ${Math.pow(i,3)}`);
//   //   console.log(`${i} ${i} = ${Math.pow(i,3)}`);
// }

// let sumOfOddNumbers = 0;
// let sumofEvenNumbers = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumofEvenNumbers += i;
//   } else if (i % 2 === 1) {
//     sumOfOddNumbers += i;
//   }
// }
// console.log([sumofEvenNumbers, sumOfOddNumbers]);

// let randomNumbers = "";
// for (let i = 0; i < 5; i++) {
//   randomNumbers += Math.floor(Math.random() * 10);
// }
// console.log(randomNumbers);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let x = 0; x < arr.length; x++) {
//   if (arr[x] % 2 === 0) {
//     console.log(arr[x]);
//   }
// }

for (let num of arr) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// basic git and github
