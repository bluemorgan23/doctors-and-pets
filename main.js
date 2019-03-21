const doctorObjBuilder = (drName, drSpecialty, drAddress) => {
    return {
        name: drName,
        specialty: drSpecialty,
        address: drAddress
    }
};

console.log(doctorObjBuilder("Dr. Dre", "Sick Beats", "Compton"));


const petObjBuilder = (petName, petBreed) => {
    return {
        name: petName,
        breed: petBreed
    }
}

const BowWowKennels = [];

BowWowKennels.push(petObjBuilder("Big Bird", "Red-Tailed Hawk"));
BowWowKennels.push(petObjBuilder("Kitty", "Ocelot"));
BowWowKennels.push(petObjBuilder("Piggie Smalls", "Mini-Pig"));

console.table(BowWowKennels);