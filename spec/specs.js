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
        expect(medOneTop.price).to.equal(13.99);
        expect(largeOneTop.price).to.equal(19.99);
        expect(xlargeOneTop.price).to.equal(24.99);
        expect(xxxlargeOneTop.price).to.equal(34.99);
    });

    it("costs $1 more per topping for a small pizza", function() {
        // Arrange
        var smallTwoTop = new Pizza("small", ["mushrooms", "onions"]);
        var smallThreeTop = new Pizza("small", ["mushrooms", "onions", "peppers"]);
        var smallFourTop = new Pizza("small", ["mushrooms", "onions", "peppers", "pepperoncinis"]);

        // Act
        smallTwoTop.calculatePrice();
        smallThreeTop.calculatePrice();
        smallFourTop.calculatePrice();

        // Assert
        expect(smallTwoTop.price).to.equal(12.99);
        expect(smallThreeTop.price).to.equal(13.99);
        expect(smallFourTop.price).to.equal(14.99);
    });

    it("costs $2 more per topping for a medium pizza", function() {
        // Arrange
        var medTwoTop = new Pizza("medium", ["mushrooms", "onions"]);
        var medThreeTop = new Pizza("medium", ["mushrooms", "onions", "peppers"]);
        var medFourTop = new Pizza("medium", ["mushrooms", "onions", "peppers", "pepperoncinis"]);

        // Act
        medTwoTop.calculatePrice();
        medThreeTop.calculatePrice();
        medFourTop.calculatePrice();

        // Assert
        expect(medTwoTop.price).to.equal(15.99);
        expect(medThreeTop.price).to.equal(17.99);
        expect(medFourTop.price).to.equal(19.99);
    });

    it("costs $3 more per topping for a large pizza", function() {
        // Arrange
        var largeTwoTop = new Pizza("large", ["mushrooms", "onions"]);
        var largeThreeTop = new Pizza("large", ["mushrooms", "onions", "peppers"]);
        var largeFourTop = new Pizza("large", ["mushrooms", "onions", "peppers", "pepperoncinis"]);

        // Act
        largeTwoTop.calculatePrice();
        largeThreeTop.calculatePrice();
        largeFourTop.calculatePrice();

        // Assert
        expect(largeTwoTop.price).to.equal(22.99);
        expect(largeThreeTop.price).to.equal(25.99);
        expect(largeFourTop.price).to.equal(28.99);
    });

    it("costs $4 more per topping for an x-large pizza", function() {
        // Arrange
        var xlargeTwoTop = new Pizza("xlarge", ["mushrooms", "onions"]);
        var xlargeThreeTop = new Pizza("xlarge", ["mushrooms", "onions", "peppers"]);
        var xlargeFourTop = new Pizza("xlarge", ["mushrooms", "onions", "peppers", "pepperoncinis"]);

        // Act
        xlargeTwoTop.calculatePrice();
        xlargeThreeTop.calculatePrice();
        xlargeFourTop.calculatePrice();

        // Assert
        expect(xlargeTwoTop.price).to.equal(28.99);
        expect(xlargeThreeTop.price).to.equal(32.99);
        expect(xlargeFourTop.price).to.equal(36.99);
    });

    it("costs $6 more per topping for a xxx-large pizza", function() {
        // Arrange
        var xxxlargeTwoTop = new Pizza("xxxlarge", ["mushrooms", "onions"]);
        var xxxlargeThreeTop = new Pizza("xxxlarge", ["mushrooms", "onions", "peppers"]);
        var xxxlargeFourTop = new Pizza("xxxlarge", ["mushrooms", "onions", "peppers", "pepperoncinis"]);

        // Act
        xxxlargeTwoTop.calculatePrice();
        xxxlargeThreeTop.calculatePrice();
        xxxlargeFourTop.calculatePrice();

        // Assert
        expect(xxxlargeTwoTop.price).to.equal(40.99);
        expect(xxxlargeThreeTop.price).to.equal(46.99);
        expect(xxxlargeFourTop.price).to.equal(52.99);
    });

    it("costs $2 extra for a gluten-free pizza", function() {
        // Arrange
        var smGf = new Pizza("small", ["mushrooms", "onions"], true);

        // Act
        smGf.calculatePrice();

        // Assert
        expect(smGf.price).to.equal(14.99);
    });

    it("costs extra for daiya cheese depending on the size", function() {
        // Arrange
        var smDaiya = new Pizza("small", ["mushrooms", "onions", "daiya"], false, true);
        var mdDaiya = new Pizza("medium", ["mushrooms", "onions", "daiya"], false, true);
        var lgDaiya = new Pizza("large", ["mushrooms", "onions", "daiya"], false, true);
        var xlgDaiya = new Pizza("xlarge", ["mushrooms", "onions", "daiya"], false, true);
        var xxxlgDaiya = new Pizza("xxxlarge", ["mushrooms", "onions", "daiya"], false, true);

        // Act
        smDaiya.calculatePrice();
        mdDaiya.calculatePrice();
        lgDaiya.calculatePrice();
        xlgDaiya.calculatePrice();
        xxxlgDaiya.calculatePrice();

        // Assert
        expect(smDaiya.price).to.equal(15.99);
        expect(mdDaiya.price).to.equal(20.99);
        expect(lgDaiya.price).to.equal(29.99);
        expect(xlgDaiya.price).to.equal(37.99);
        expect(xxxlgDaiya.price).to.equal(53.99);
    });
});
