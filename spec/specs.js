describe('Pizza', function() {
    it("creates a Pizza with the given specifications", function() {
        // Arrange
        var size = "xlarge";
        var toppings = ["mushrooms", "olives", "sausage"];
        var glutenFree = false;
        var vegan = false;

        // Act
        var testPizza = new Pizza(size, toppings, glutenFree, vegan);

        // Assert
        expect(testPizza.size).to.equal(size);
        expect(testPizza.toppings).to.eql(toppings);
        expect(testPizza.glutenFree).to.equal(false);
        expect(testPizza.vegan).to.equal(false);
    });

    it("creates a Pizza without arguments for gf & vegan", function() {
        // Arrange
        var size = "xlarge";
        var toppings = ["mushrooms", "olives", "sausage"];

        // Act
        var testPizza = new Pizza(size, toppings);

        // Assert
        expect(testPizza.size).to.equal(size);
        expect(testPizza.toppings).to.eql(toppings);
        expect(testPizza.glutenFree).to.equal(false);
        expect(testPizza.vegan).to.equal(false);
    });

    it("creates a vegan gluten-free Pizza", function() {
        // Arrange
        var size = "xlarge";
        var toppings = ["mushrooms", "olives", "sausage"];
        var vegan = true;
        var glutenFree = true;

        // Act
        var testPizza = new Pizza(size, toppings, vegan, glutenFree);

        // Assert
        expect(testPizza.size).to.equal(size);
        expect(testPizza.toppings).to.eql(toppings);
        expect(testPizza.glutenFree).to.equal(true);
        expect(testPizza.vegan).to.equal(true);
    });
});

describe('Pizza.calculatePrice', function() {
    it("costs 11.99 for a small cheese", function() {
        // Arrange
        var size = "small";
        var toppings = [];
        var testPizza = new Pizza(size, toppings);

        // Act
        testPizza.calculatePrice();

        // Assert
        expect(testPizza.price).to.equal(11.99);
    });

    it("costs 13.99 for a medium cheese", function() {
        // Arrange
        var size = "medium";
        var toppings = [];
        var testPizza = new Pizza(size, toppings);

        // Act
        testPizza.calculatePrice();

        // Assert
        expect(testPizza.price).to.equal(13.99);
    });

    it("costs 19.99 for a large cheese", function() {
        // Arrange
        var size = "large";
        var toppings = [];
        var testPizza = new Pizza(size, toppings);

        // Act
        testPizza.calculatePrice();

        // Assert
        expect(testPizza.price).to.equal(19.99);
    });

    it("costs 24.99 for an x-large cheese", function() {
        // Arrange
        var size = "xlarge";
        var toppings = [];
        var testPizza = new Pizza(size, toppings);

        // Act
        testPizza.calculatePrice();

        // Assert
        expect(testPizza.price).to.equal(24.99);
    });

    it("costs 34.99 for a xxx-large cheese", function() {
        // Arrange
        var size = "xxxlarge";
        var toppings = [];
        var testPizza = new Pizza(size, toppings);

        // Act
        testPizza.calculatePrice();

        // Assert
        expect(testPizza.price).to.equal(34.99);
    });

    it("costs the same for one topping pizzas of any size", function() {
        // Arrange
        var smallOneTop = new Pizza("small", ["mushrooms"]);
        var medOneTop = new Pizza("medium", ["mushrooms"]);
        var largeOneTop = new Pizza("large", ["mushrooms"]);
        var xlargeOneTop = new Pizza("xlarge", ["mushrooms"]);
        var xxxlargeOneTop = new Pizza("xxxlarge", ["mushrooms"]);

        // Act
        smallOneTop.calculatePrice();
        medOneTop.calculatePrice();
        largeOneTop.calculatePrice();
        xlargeOneTop.calculatePrice();
        xxxlargeOneTop.calculatePrice();

        // Assert
        expect(smallOneTop.price).to.equal(11.99);
        expect(smallOneTop.price).to.equal(13.99);
        expect(smallOneTop.price).to.equal(19.99);
        expect(smallOneTop.price).to.equal(24.99);
        expect(smallOneTop.price).to.equal(34.99);

    });
});
