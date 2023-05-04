// Adam Gallagher - Checkout //

let dish1quant = 0;
let dish2quant = 0;
let dish3quant = 0;
let dish4quant = 0;
let dish5quant = 0;
let dish6quant = 0;
let dish7quant = 0;
let dish8quant = 0;
let dish9quant = 0;
let dish10quant = 0;
let cost = 0;
let total = 0;
let printTime = 0;
let finishTime = 0;


paymentScreen.style.display = "none";

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

function item_add_dish5(){
    dish5quant = dish5quant + 1;
    document.getElementById("item5").innerHTML = dish5quant;
}
function item_remove_dish5(){
    if(dish5quant > 0){dish5quant = dish5quant - 1;}
    document.getElementById("item5").innerHTML = dish5quant;
}

function item_add_dish6(){
    dish6quant = dish6quant + 1;
    document.getElementById("item6").innerHTML = dish6quant;
}
function item_remove_dish6(){
    if(dish6quant > 0){dish6quant = dish6quant - 1;}
    document.getElementById("item6").innerHTML = dish6quant;
}

function item_add_dish7(){
    dish7quant = dish7quant + 1;
    document.getElementById("item7").innerHTML = dish7quant;
}
function item_remove_dish7(){
    if(dish7quant > 0){dish7quant = dish7quant - 1;}
    document.getElementById("item7").innerHTML = dish7quant;
}

function item_add_dish8(){
    dish8quant = dish8quant + 1;
    document.getElementById("item8").innerHTML = dish8quant;
}
function item_remove_dish8(){
    if(dish8quant > 0){dish8quant = dish8quant - 1;}
    document.getElementById("item8").innerHTML = dish8quant;
}

function item_add_dish9(){
    dish9quant = dish9quant + 1;
    document.getElementById("item9").innerHTML = dish9quant;
}
function item_remove_dish9(){
    if(dish9quant > 0){dish9quant = dish9quant - 1;}
    document.getElementById("item9").innerHTML = dish9quant;
}

function item_add_dish10(){
    dish10quant = dish10quant + 1;
    document.getElementById("item10").innerHTML = dish10quant;
}
function item_remove_dish10(){
    if(dish10quant > 0){dish10quant = dish10quant - 1;}
    document.getElementById("item10").innerHTML = dish10quant;
}

function update_cost(){
    total = dish1quant*2.99 + dish2quant*5.99 + dish3quant*3.99 + dish4quant*4.99 + dish5quant*3.99 + dish6quant*2.99 + dish7quant*2.50 + dish8quant*2 + dish9quant*2.50 + dish10quant*3.20;
    cost = Math.round((total + Number.EPSILON) * 100) / 100;
    document.getElementById("Ammount").innerHTML = "€"+cost;
}

function payment(){
    if(total > 0){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
        printTime = (dateTime);
        finishTime = (today.getHours()+1) + ":" + today.getMinutes() + ":" + today.getSeconds();

        document.getElementById("orderNum").innerHTML = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
        document.getElementById("price-of").innerHTML = cost;
        document.getElementById("print").innerHTML = printTime;
        document.getElementById("finish").innerHTML = finishTime;

    paymentScreen.style.display = "block";
    shoppingCart.style.display = "none";
    }
}

// END OF CHECKOUT JS //






// Soup of the day by Fionn McCarthy

let curDate = new Date();   //  Reads in current date from browser
let day = curDate.getDay(); //  Reads in current day
var mealOfDay;

switch (day) {  //  Decides Soup of the Day
    case 0:
        mealOfDay = "Tomato and Basil Soup";    //  Soup description
    break;
    case 1:
        mealOfDay = "Seafood Chowder";
    break;
    case 2:
        mealOfDay = "Leek and Potato Soup";
    break;
    case 3:
        mealOfDay = "Chorizo and Bean Soup";
    break;
    case 4:
        mealOfDay = "Butternut Squash and Chilli Soup";
        break;
    case 5:
        mealOfDay = "Carrot and Coriander Soup";
    break;
    default:
        mealOfDay = "Potato and Leek Soup";
}

//  Text outputted
document.getElementById("SoupOfTheDay").innerHTML = ("Todays soup of the day is: <br>"+"<b>"+mealOfDay)