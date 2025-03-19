//GET USER INPUT
let price = prompt("Enter a price tag:")


//REMOVE $ FROM INPUT AND CONVERT TO NUMBER
let  priceNum = price.replace("$","");
priceNum = parseFloat(priceNum);

//APPLY DISCOUNT & ROUND TO NEAREST CENTS
let discount = priceNum * .90;
discount = discount.toFixed(2);

//PRINT TO CONSOLE LOG & PRINT TO USER SCREEN
console.log(`Your new price is: $${discount}`);
document.getElementById("discount").innerText = `Your new price is: $${discount}`;
