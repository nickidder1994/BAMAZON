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
      choices: ["1.iPod", "2.Speaker", "3.Hydroflask", "4.Tent", "5.Dish Washer", "6. Play Station Controller", "7.Sheets", "8.Pillows", "9.Protein Powder", "10.Tredmill"]
    })
.then(function (answer) {
  // based on their answer, either call the bid or the post functions
  if (answer.whatItemWouldYouLikeTOBuy === "1.iPod") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "2.Speaker") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "3.Hydroflask") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "4.Tent") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "5.Dish Washer") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "6.Play Station Controller") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "7.Sheets") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "8.Pillows") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "9.Protein Powder") {
    console.log("How Many?");
  } else if (answer.whatItemWouldYouLikeTOBuy === "10.Tredmill") {
    console.log("How Many?");
  }
})
}