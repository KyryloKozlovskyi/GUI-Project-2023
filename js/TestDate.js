let curDate = new Date();   //  Reads in current date from browser
let day = curDate.getDay();
let mealOfDay = "";
let image = "";

switch (day) {
    case 0:
        mealOfDay = "Tomato and Basil Soup";
        image = "./images/sunday.jpg";
    break;
    case 1:
        mealOfDay = "Seafood Chowder";
        image = "./images/monday.jpg";
    break;
    case 2:
        mealOfDay = "Leak and Potato Soup";
        image = "./images/tuesday.jpg";
    break;
    case 3:
        mealOfDay = "Mixed Bean Soup";
        image = "./images/wednesday.jpg";
    break;
    case 4:
        mealOfDay = "Butternut Squash and Chilli Soup";
        image = "./images/thursday.jpg";
    break;
    case 5:
        mealOfDay = "Carrot and Coriander Soup";
        image = "./images/friday.jpg";
    break;
    case 6:
        mealOfDay = "Tomato and Basil Soup";
        image = "./images/saturday.jpg";
    break;
}
