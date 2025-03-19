//GET USER INPUT
let price = prompt("Enter a price tag:")

//REMOVE $ FROM INPUT AND CONVERT TO NUMBER
priceNum = price.replace("$","");
priceNum = parseFloat(priceNum);

discount = priceNum * .90;

console.log(`Your new price is: $${discount}`);
