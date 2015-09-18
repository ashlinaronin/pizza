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
    switch (this.size) {
        case "small":
            basePrice = 11.99;
            break;
        case "medium":
            basePrice = 13.99;
            break;
        case "large":
            basePrice = 19.99;
            break;
        case "xlarge":
            basePrice = 24.99;
            break;
        case "xxxlarge":
            basePrice = 34.99;
            break;
    }

    

    this.price = basePrice;
    return basePrice;
};
