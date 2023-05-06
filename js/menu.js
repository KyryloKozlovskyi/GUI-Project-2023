//Kyrylo Kozlovskyi

//amount box implementation
let dish1 = 0;

let amountBox1 = document.getElementById("amountBox1");
let amountBox1Minus = document.getElementById("amountBox1Minus")
let amountBox1Plus = document.getElementById("amountBox1Plus")
let buttonDish1 = document.getElementById("buttonDish1") 


buttonDish1.addEventListener("click", amountBoxUpdates);
amountBox1Minus.addEventListener("click", amountBoxUpdatesMinus);
amountBox1Plus.addEventListener("click", amountBoxUpdatesPlus);


function amountBoxUpdates() {
    if(Number(amountBox1.value) > 0 && Number(amountBox1.value <= 99))
    {
        dish1 = amountBox1.value;
        sessionStorage.grilled_cheese = dish1;
    }
}

function amountBoxUpdatesMinus() {
    
    if(dish1 >= 1) 
    {
        dish1 -= 1;
        amountBox1.setAttribute("placeholder", String(dish1))
        sessionStorage.grilled_cheese = dish1;
    }
}

function amountBoxUpdatesPlus() {
    
    if(dish1 < 99) 
    {
        dish1 = dish1 + 1;
        sessionStorage.grilled_cheese = dish1;
    }
}

//value enterd inide the input box needs to be displayed to te user