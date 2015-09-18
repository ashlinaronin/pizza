function Pizza(size, toppings, glutenFree, vegan) {
    // Set gf and veg to false if not given inputs
    glutenFree = typeof glutenFree !== 'undefined' ? glutenFree : false;
    vegan = typeof vegan !== 'undefined' ? vegan : false;

    this.size = size;
    this.toppings = toppings;
    this.glutenFree = glutenFree;
    this.vegan = vegan;
    this.price = 0.0;
};

Pizza.prototype.calculatePrice = function() {
    // Base prices
    var basePrice = 0.0;
    var totalPrice = 0.0;

    var basePrices = {
        "small": 11.99,
        "medium": 13.99,
        "large": 19.99,
        "xlarge": 24.99,
        "xxxlarge": 34.99
    };

    var toppingPrices = {
        "small": 1,
        "medium": 2,
        "large": 3,
        "xlarge": 4,
        "xxxlarge": 6
    };


    switch (this.size) {
        case "small":
            basePrice = 11.99;
            if (this.toppings.length > 1) {
                totalPrice = basePrice + (this.toppings.length-1) * 1;
            } else {
                totalPrice = basePrice;
            }
            break;
        case "medium":
            basePrice = 13.99;
            if (this.toppings.length > 1) {
                totalPrice = basePrice + (this.toppings.length-1) * 2;
            } else {
                totalPrice = basePrice;
            }
            break;
        case "large":
            basePrice = 19.99;
            if (this.toppings.length > 1) {
                totalPrice = basePrice + (this.toppings.length-1) * 3;
            } else {
                totalPrice = basePrice;
            }
            break;
        case "xlarge":
            basePrice = 24.99;
            if (this.toppings.length > 1) {
                totalPrice = basePrice + (this.toppings.length-1) * 4;
            } else {
                totalPrice = basePrice;
            }
            break;
        case "xxxlarge":
            basePrice = 34.99;
            if (this.toppings.length > 1) {
                totalPrice = basePrice + (this.toppings.length-1) * 6;
            } else {
                totalPrice = basePrice;
            }
            break;
    }


    // Keep two decimal points
    this.price = parseFloat(totalPrice.toFixed(2));
    return parseFloat(totalPrice.toFixed(2));
};
