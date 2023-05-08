// Adam Gallagher - Checkout //

let dish1quant = 0;
    if(sessionStorage.grilled_cheese > 0)
    { dish1quant = sessionStorage.grilled_cheese }
let dish2quant = 0;
    if(sessionStorage.grilled_chicken > 0)
    { dish2quant = sessionStorage.grilled_chicken }
let dish3quant = 0;
    if(sessionStorage.ham_cheese > 0)
    { dish3quant = sessionStorage.ham_cheese }
let dish4quant = 0;
let dish5quant = 0;
    if(sessionStorage.latte > 0)
    { dish5quant = sessionStorage.latte }
let dish6quant = 0;
    if(sessionStorage.espresso > 0)
    { dish6quant = sessionStorage.espresso }
let dish7quant = 0;
    if(sessionStorage.tea > 0)
    { dish7quant = sessionStorage.tea }
let dish8quant = 0;
    if(sessionStorage.chocolate_chip > 0)
    { dish8quant = sessionStorage.chocolate_chip }
let dish9quant = 0;
    if(sessionStorage.berry_muffin > 0)
    { dish9quant = sessionStorage.berry_muffin }
let dish10quant = 0;
    if(sessionStorage.chocolate_brownie > 0)
    { dish10quant = sessionStorage.chocolate_brownie }
let cost = 0;
let total = 0;
let printTime = 0;
let finishTime = 0;


paymentScreen.style.display = "none";

function item_add_dish1(){
    dish1quant = Number(dish1quant) + 1;
    document.getElementById("item1").innerHTML = dish1quant;
}
function item_remove_dish1(){
    if(dish1quant > 0){dish1quant = Number(dish1quant) - 1;}
    document.getElementById("item1").innerHTML = dish1quant;
}

function item_add_dish2(){
    dish2quant = Number(dish2quan) + 1;
    document.getElementById("item2").innerHTML = dish2quant;
}
function item_remove_dish2(){
    if(dish2quant > 0){dish2quant = Number(dish2quant) - 1;}
    document.getElementById("item2").innerHTML = dish2quant;
}

function item_add_dish3(){
    dish3quant = Number(dish3quant) + 1;
    document.getElementById("item3").innerHTML = dish3quant;
}
function item_remove_dish3(){
    if(dish3quant > 0){dish3quant = Number(dish3quant) - 1;}
    document.getElementById("item3").innerHTML = dish3quant;
}

function item_add_dish4(){
    dish4quant = Number(dish4quant) + 1;
    document.getElementById("item4").innerHTML = dish4quant;
}
function item_remove_dish4(){
    if(dish4quant > 0){dish4quant = Number(dish4quant) - 1;}
    document.getElementById("item4").innerHTML = dish4quant;
}

function item_add_dish5(){
    dish5quant = Number(dish5quant) + 1;
    document.getElementById("item5").innerHTML = dish5quant;
}
function item_remove_dish5(){
    if(dish5quant > 0){dish5quant = Number(dish5quant) - 1;}
    document.getElementById("item5").innerHTML = dish5quant;
}

function item_add_dish6(){
    dish6quant = Number(dish6quant) + 1;
    document.getElementById("item6").innerHTML = dish6quant;
}
function item_remove_dish6(){
    if(dish6quant > 0){dish6quant = Number(dish6quant) - 1;}
    document.getElementById("item6").innerHTML = dish6quant;
}

function item_add_dish7(){
    dish7quant = Number(dish7quant) + 1;
    document.getElementById("item7").innerHTML = dish7quant;
}
function item_remove_dish7(){
    if(dish7quant > 0){dish7quant = Number(dish7quant) - 1;}
    document.getElementById("item7").innerHTML = dish7quant;
}

function item_add_dish8(){
    dish8quant = Number(dish8quant) + 1;
    document.getElementById("item8").innerHTML = dish8quant;
}
function item_remove_dish8(){
    if(dish8quant > 0){dish8quant = Number(dish8quant) - 1;}
    document.getElementById("item8").innerHTML = dish8quant;
}

function item_add_dish9(){
    dish9quant = Number(dish9quant) + 1;
    document.getElementById("item9").innerHTML = dish9quant;
}
function item_remove_dish9(){
    if(dish9quant > 0){dish9quant = Number(dish9quant) - 1;}
    document.getElementById("item9").innerHTML = dish9quant;
}

function item_add_dish10(){
    dish10quant = Number(dish10quant) + 1;
    document.getElementById("item10").innerHTML = dish10quant;
}
function item_remove_dish10(){
    if(dish10quant > 0){dish10quant = Number(dish10quant) - 1;}
    document.getElementById("item10").innerHTML = dish10quant;
}

function update_cost(){
    total = dish1quant*2.99 + dish2quant*5.99 + dish3quant*3.99 + dish4quant*4.99 + dish5quant*3.99 + dish6quant*2.99 + dish7quant*2.50 + dish8quant*2 + dish9quant*2.50 + dish10quant*3.20;
    cost = Math.round((total + Number.EPSILON) * 100) / 100;
    document.getElementById("Ammount").innerHTML = "€"+cost;
}

function update_vars(){
    document.getElementById("item1").innerHTML = dish1quant;
    document.getElementById("item2").innerHTML = dish2quant;
    document.getElementById("item3").innerHTML = dish3quant;
    document.getElementById("item4").innerHTML = dish4quant;
    document.getElementById("item5").innerHTML = dish5quant;
    document.getElementById("item6").innerHTML = dish6quant;
    document.getElementById("item7").innerHTML = dish7quant;
    document.getElementById("item8").innerHTML = dish8quant;
    document.getElementById("item9").innerHTML = dish9quant;
    document.getElementById("item10").innerHTML = dish10quant;
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
var mealOfDay, soupImg;

switch (day) {  //  Decides Soup of the Day
    case 0:
        mealOfDay = "Tomato and Basil Soup";    //  Soup description
        soupImg = "../images/soup/sunday.jpg";

    break;
    case 1:
        mealOfDay = "Seafood Chowder";
        soupImg = "../images/soup/monday.jpg";
    break;
    case 2:
        mealOfDay = "Leek and Potato Soup";
        soupImg = "../images/soup/tuesday.jpg";
    break;
    case 3:
        mealOfDay = "Chorizo and Bean Soup";
        soupImg = "../images/soup/wednesday.png";
    break;
    case 4:
        mealOfDay = "Butternut Squash and Chilli Soup";
        soupImg = "../images/soup/thursday.jpg";
        break;
    case 5:
        mealOfDay = "Carrot and Coriander Soup";
        soupImg = "../images/soup/friday.jpg";
    break;
    default:
        mealOfDay = "Potato and Leek Soup";
        soupImg = "../images/soup/saturday.jpg";
}

//  Text outputted
document.getElementById("soupOfTheDay").innerHTML = ("Todays soup of the day is: <br>"+"<b>"+mealOfDay);
//  Image outputted
document.getElementById("soupImg").src = soupImg;