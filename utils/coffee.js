const coffee = require("../models/coffee");

const allCoffee = async() => await coffee.find({});
const oneCoffee = async(id) => null;
const addCoffee = async(coffee) => await new Coffee(coffee).save();
const editCoffee = async(id, coffee) => null;
const deleteCoffee = async(id) => null;
const deleteAllCoffee = async() => await Coffee.deleteMany({});

module.exports = {
    allCoffee,
    oneCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
    deleteAllCoffee,
};