// Adam Gallagher - Checkout //

let dish1quant = 0;
let dish2quant = 0;
let dish3quant = 0;
let dish4quant = 0;
let cost = 0;
let total = 0;
let printTime = 0;
let finishTime = 0;

var x = document.getElementById("paymentScreen");
x.style.display = "none";

function item_add_dish1(){
    dish1quant = dish1quant + 1;
    document.getElementById("item1").innerHTML = dish1quant;
}
function item_remove_dish1(){
    if(dish1quant > 0){dish1quant = dish1quant - 1;}
    document.getElementById("item1").innerHTML = dish1quant;
}

function item_add_dish2(){
    dish2quant = dish2quant + 1;
    document.getElementById("item2").innerHTML = dish2quant;
}
function item_remove_dish2(){
    if(dish2quant > 0){dish2quant = dish2quant - 1;}
    document.getElementById("item2").innerHTML = dish2quant;
}

function item_add_dish3(){
    dish3quant = dish3quant + 1;
    document.getElementById("item3").innerHTML = dish3quant;
}
function item_remove_dish3(){
    if(dish3quant > 0){dish3quant = dish3quant - 1;}
    document.getElementById("item3").innerHTML = dish3quant;
}

function item_add_dish4(){
    dish4quant = dish4quant + 1;
    document.getElementById("item4").innerHTML = dish4quant;
}
function item_remove_dish4(){
    if(dish4quant > 0){dish4quant = dish4quant - 1;}
    document.getElementById("item4").innerHTML = dish4quant;
}

function update_cost(){
    total = dish1quant*5 + dish2quant*5 + dish3quant*5 + dish4quant*5;
    cost = total;
    document.getElementById("Ammount").innerHTML = "€"+cost;
}

function payment(){
    if(total > 0){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
        printTime = (dateTime);
        finishTime = today.getHours() + ":" + (today.getMinutes()+30) + ":" + today.getSeconds();

        document.getElementById("orderNum").innerHTML = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
        document.getElementById("price-of").innerHTML = total;
        document.getElementById("print").innerHTML = printTime;
        document.getElementById("finish").innerHTML = finishTime;

    x.style.display = "block";
    }
}

// END OF CHECKOUT JS //