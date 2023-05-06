//Kyrylo Kozlovskyi

//variable for reading values from input box
let amountBox1 = document.getElementById("amountBox1");
//variable for eventlistener
let buttonDish1 = document.getElementById("buttonDish1");
let amountBox2 = document.getElementById("amountBox2");
let buttonDish2 = document.getElementById("buttonDish2") 
let amountBox3 = document.getElementById("amountBox3");
let buttonDish3 = document.getElementById("buttonDish3");
let amountBox4 = document.getElementById("amountBox4");
let buttonDish4 = document.getElementById("buttonDish4");
let amountBox5 = document.getElementById("amountBox5");
let buttonDish5 = document.getElementById("buttonDish5");
let amountBox6 = document.getElementById("amountBox6");
let buttonDish6 = document.getElementById("buttonDish6");
let amountBox7 = document.getElementById("amountBox7");
let buttonDish7 = document.getElementById("buttonDish7");
let amountBox8 = document.getElementById("amountBox8");
let buttonDish8 = document.getElementById("buttonDish8");
let amountBox9 = document.getElementById("amountBox9");
let buttonDish9 = document.getElementById("buttonDish9");

//Event listeners for "add to busket buttons" 
buttonDish1.addEventListener("click", quantityUpdateDish1);
buttonDish2.addEventListener("click", quantityUpdateDish2);
buttonDish3.addEventListener("click", quantityUpdateDish3);
buttonDish4.addEventListener("click", quantityUpdateDish4);
buttonDish5.addEventListener("click", quantityUpdateDish5);
buttonDish6.addEventListener("click", quantityUpdateDish6);
buttonDish7.addEventListener("click", quantityUpdateDish7);
buttonDish8.addEventListener("click", quantityUpdateDish8);
buttonDish9.addEventListener("click", quantityUpdateDish9);


//Updates dish quantity in Session storage
function quantityUpdateDish1() {
    sessionStorage.grilled_cheese = amountBox1.value;
}

function quantityUpdateDish2() {
    sessionStorage.grilled_chicken = amountBox2.value;
}

function quantityUpdateDish3() {
    sessionStorage.ham_cheese = amountBox3.value;
}

function quantityUpdateDish4() {
    sessionStorage.latte = amountBox4.value;
}

function quantityUpdateDish5() {
    sessionStorage.espresso = amountBox5.value;
}

function quantityUpdateDish6() {
    sessionStorage.tea = amountBox6.value;
}

function quantityUpdateDish7() {
    sessionStorage.chocolate_chip = amountBox7.value;
}

function quantityUpdateDish8() {
    sessionStorage.berry_muffin = amountBox8.value;
}

function quantityUpdateDish9() {
    sessionStorage.chocolate_brownie = amountBox9.value;
}