// Import Database Models
const db = require("../models");

//Syncing our sequelize models
db.sequelize.sync().then(function () {
  db.Product.bulkCreate([{

  product_name: "Paper Towels",
  department_name: "Paper Products",
  price: 16.00,
  stock_quantity: 50
},
{
  product_name: "Dunkin Donuts Coffee",
  department_name: "Coffee",
  price: 25.00,
  stock_quantity: 32
},
{
  product_name: "Cottonelle Toilet Paper",
  department_name: "Bathroom Products",
  price: 18.99,
  stock_quantity: 100
},
{
  product_name: "Cinnomon Toast Crunch Cereal",
  department_name: "Breakfast",
  price: 4.95,
  stock_quantity: 25
},
{
  product_name: "Kraft Macaroni and Cheese",
  department_name: "Pasta",
  price: 4.50,
  stock_quantity: 54
},
{
  product_name: "Clorax Disinfecting wipes",
  department_name: "Cleaning",
  price: 10.58,
  stock_quantity: 47
},
{
  product_name: "Glad Trashbags",
  department_name: "Cleaning",
  price: 11.62,
  stock_quantity: 200
},
{
  product_name: "Coke",
  department_name: "Drinks",
  price: 4.68,
  stock_quantity: 125
},
{
  product_name: "American Cheese",
  department_name: "Dairy",
  price: 2.99,
  stock_quantity: 28
},
{
  product_name: "Yoplait strawberry yougurt",
  department_name: "Dairy",
  price: 2.79,
  stock_quantity: 26
}
]).then(function (data) {
  console.log('Data successfully added!');
}).catch(function (error) {
  console.log('Error', error)
});
});