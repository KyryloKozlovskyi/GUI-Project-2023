// File made by Fionn McCarthy

let curDate = new Date();   //  Reads in current date from browser
let day = curDate.getDay(); //  Reads in current day
var mealOfDay;

switch (day) {  //  Decides Soup of the Day
    case 0:
        mealOfDay = "Tomato and Basil Soup";    //  Soup description
        //  Image src
        document.getElementById("soup").style.backgroundImage = 'url(../images/soup/sunday.jpg)';
    break;
    case 1:
        mealOfDay = "Seafood Chowder";
        document.getElementById("soup").style.backgroundImage = 'url(../images/soup/monday.jpg)';

    break;
    case 2:
        mealOfDay = "Leek and Potato Soup";
        document.getElementById("soup").style.backgroundImage = 'url(../images/soup/tuesday.jpg)';
    break;
    case 3:
        mealOfDay = "Chorizo and Bean Soup";
        document.getElementById("soup").style.backgroundImage = 'url(../images/soup/wednesday.jpg)';
    break;
    case 4:
        mealOfDay = "Butternut Squash and Chilli Soup";
        document.getElementById("soup").style.backgroundImage = 'url(../images/soup/thursday.jpg)';
        break;
    case 5:
        mealOfDay = "Carrot and Coriander Soup";
        document.getElementById("soup").style.backgroundImage = 'url(../images/soup/friday.jpg)';
    break;
    default:
        mealOfDay = "Potato and Leek Soup";
        document.getElementById("soup").style.backgroundImage = 'url(../images/soup/saturday.jpg)';
}

//  Text outputted
document.getElementById("soupText").innerHTML = ("Our freshly made Soup of the Day is our award winning " + mealOfDay + "!")
