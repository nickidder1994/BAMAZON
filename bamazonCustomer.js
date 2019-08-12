var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Taco1994!",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  start();
});

function start() {
  inquirer
    .prompt({
      name: "whatItemWouldYouLikeTOBuy",
      type: "list",
      message: "These are available items",
      choices: ["1.iPod", "2.Speaker", "3.Hydroflask", "4.Tent", "5.Dish  Washer", "6. Play Station Controller", "7.Sheets", "8.Pillows", "9.Protein Powder", "10.Tredmill"]
    })
}