function Pizza(size, toppings, glutenFree, vegan) {
    // Set gf and veg to false if not given inputs
    // JavaScript doesn't allow you to declare default values in parameters like PHP
    glutenFree = typeof glutenFree !== 'undefined' ? glutenFree : false;
    vegan = typeof vegan !== 'undefined' ? vegan : false;

    this.size = size;
    this.toppings = toppings;
    this.glutenFree = glutenFree;
    this.vegan = vegan;
    this.price = null;
};

Pizza.prototype.calculatePrice = function() {
    var basePrice, totalPrice;
    var basePrices = {
        "small": 11.99,
        "medium": 13.99,
        "large": 19.99,
        "x-large": 24.99,
        "xxx-large": 34.99
    };
    var toppingPrices = {
        "small": 1,
        "medium": 2,
        "large": 3,
        "x-large": 4,
        "xxx-large": 6
    };

    var daiyaPrices = {
        // 2 3 4 5 7
        "small": 2,
        "medium": 3,
        "large": 4,
        "x-large": 5,
        "xxx-large": 7
    }

    // Get base price based on this size of this pizza
    basePrice = basePrices[this.size];

    // Add extra depending on the toppings
    if (this.toppings.length > 1) {
        totalPrice = basePrice + (this.toppings.length-1) * toppingPrices[this.size];
    } else {
        totalPrice = basePrice;
    }

    // Add extra for gf
    if (this.glutenFree) { totalPrice += 2; }

    // Add extra for daiya
    if (this.toppings.indexOf("daiya") > -1) {
        totalPrice += daiyaPrices[this.size];
    }

    // Keep two decimal points
    this.price = parseFloat(totalPrice.toFixed(2));
    return parseFloat(totalPrice.toFixed(2));
};
