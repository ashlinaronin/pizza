function Pizza(size, toppings, glutenFree, vegan) {
    // Set gf and veg to false if not given inputs
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

    // Keep two decimal points
    this.price = parseFloat(totalPrice.toFixed(2));
    return parseFloat(totalPrice.toFixed(2));
};
