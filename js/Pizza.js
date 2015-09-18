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

};
