function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
 
let scooter = new Scooter(1989, "blue", "manhattan");


function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
 
let driver = new Driver("Ben", 25, "driver");



function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
 
let pickUpLocation = new PickupLocation("Vicalvaro", "Madrid");


