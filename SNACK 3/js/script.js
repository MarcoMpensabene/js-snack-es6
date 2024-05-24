// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        nome : "biciA" , weight : 50
    },
    {
        nome: "biciB" , weight : 75
    },
    {
        nome : "biciC" , weight : 92
    },
    {
        nome: "biciD" , weight : 32
    },
    {
        nome : "biciE" , weight : 100
    },
    {
        nome : "biciF" , weight : 66
    },
]


const { weight: minWeight, nome: minBikeName } = bikes.reduce(
    (minBike, bike) =>
        bike.weight < minBike.weight ? bike : minBike,
    bikes[0]
    );

console.log(`La bici con peso minore è la ${minBikeName} che pesa ${minWeight} kg.`);

// let minWeight = bikes[0].weight;
// let minBikeName = bikes[0].name;


// for (let i = 1; i < bikes.length; i++) {
//   if (bikes[i].weight < minWeight) {
//     minWeight = bikes[i].weight;
//     minBikeName = bikes[i].name;
//   }
// }

// console.log(`La bici con peso minore è la ${minBikeName} che pesa ${minWeight} kg.`);