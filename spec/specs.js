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

// describe('Pizza.calculatePrice', function() {
//     it("costs 11.99 for a small cheese", function() {
//         // Arrange
//         var size = "medium";
//         var toppings = ["mushrooms", "olives", "sausage"];
//
//
//         // Act
//         var testPizza = new Pizza(size, toppings);
//
//         // Assert
//         expect(testPizza.size).to.equal(size);
//         expect(testPizza.toppings).to.eql(toppings);
//         expect(testPizza.glutenFree).to.equal(glutenFree);
//         expect(testPizza.vegan).to.equal(vegan);
//     });
//
//     it("costs 13.99 for a medium cheese", function() {
//
//     });
//
//     it("costs 19.99 for a large cheese", function() {
//
//     });
//
//     it("costs 24.99 for an x-large cheese", function() {
//
//     });
//
//     it("costs 34.99 for a xxx-large cheese", function() {
//
//     });
// });
