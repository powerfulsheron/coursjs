const cars = [
    { type:"Volvo", year:2016, km: 20000, couleur: "noire" },
    { type:"Saab", year:2001, km: 400000 },
    { type:"BMW", year:2010, km: 30000000 },
    { type:"Volvo", year:2017, km: 20076500, couleur: "noire" },
];

// console.log("cars", cars);

// // cars.filter(x => x.year > 2010).forEach((car, index, array) => {
// //     car.km = 0;
// //     car.couleur = "blanc";
// // });

// //cars[0].couleur = "Bleue";

// cars.filter((x, index) => index % 2 ===0).forEach((car, index, array) => {
//     car.km = 0;
//     car.couleur = "blanc";
// });

// console.log("cars", cars);

// const oldCars = cars.filter(x => x.year < 2016);

// console.log(oldCars);

// const numbers = [10, 20, 434, 46, 2, 3, 5];

// console.log(numbers.filter(x => x > 20));

// const updatedVolvoCars = cars.filter( x => x.type === "Volvo");

// // const updatedVolvoCars = cars.filter( x => x.type === "Volvo").map( x => x.km = 0);

// updatedVolvoCars.map( x => x.km = 0);

// console.log(updatedVolvoCars);

console.log("cars", cars);

console.log(
    cars.reduce((previousCar, currentCar) => {
        return previousCar.km + currentCar.km;
    })
);