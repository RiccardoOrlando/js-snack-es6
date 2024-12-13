// Snack 1
const bikes = [
    {
        bikesbrand: "Bianchi",
        weight: 6900
    },

    {
        bikesbrand: "Pinarello",
        weight: 6700
    },

    {
        bikesbrand: "Colnago",
        weight: 6800
    }
    
]

let FasterBike = []

for(let i = 1; i < bikes.length; i++) {
    if(bikes[i].weight < FasterBike.weight)
        FasterBike = bikes[i]
}

console.log(FasterBike)

// Snack 2