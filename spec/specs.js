describe('Pizza', function() {
    it("creates a Pizza with the given specifications", function() {
        // Arrange
        var size = "X-Large";
        var toppings = ["mushrooms", "olives", "sausage"];
        var glutenFree = false;
        var vegan = false;

        // Act
        var testPizza = new Pizza(size, toppings, glutenFree, vegan);

        // Assert
        expect(testPizza.size).to.equal(size);
        expect(testPizza.toppings).to.eql(toppings);
        expect(testPizza.glutenFree).to.equal(glutenFree);
        expect(testPizza.vegan).to.equal(vegan);
    });
});
