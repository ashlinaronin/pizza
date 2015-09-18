$(document).ready(function() {

  $("body").hide().fadeIn("slow");

  var size, pizza;
  var toppings = [];
  var price = 0.0;
  var totalPrice = 0.0;
  var glutenFree = false;
  var vegan = false;
  var quantity = 1;

  var writeOrderDescription = function() {
    var description = "";

    if (typeof size !== "undefined") {
      description += quantity + " " + size;
    } else {
      description += quantity + " ";
    }


    // No toppings means a cheese pizza
    if (toppings.length === 0) {
      description += " cheese";
    }

    // Singular or plural depending on quantity
    if (quantity == 1) {
      description += " pizza";
    } else {
      description += " pizzas";
    }

    // Write the toppings if we have them
    if (toppings.length !== 0) {
      description += " with ";
      for (var i = 0; i < toppings.length; i++) {
        if (i === toppings.length-1) {
          description += toppings[i];
        } else if (i === toppings.length-2) {
          description += toppings[i] + " and ";
        } else {
          description += toppings[i] + ", ";
        }
      };
    }

    description += ".";
    return description;
  }


  // Get size from size select menu
  $("#size").change(function() {
    $("#size option:selected").each(function() {
      size = $(this).val();
      $(".order-description").text(writeOrderDescription());
    });
  });

  // Add chosen topping to array of toppings
  $("#choose-toppings img").click(function(event) {
    var thisTopping = $(this).attr('id');

    // Add this topping if it hasn't been selected yet
    if (toppings.indexOf(thisTopping) === -1) {
      toppings.push(thisTopping);
    }

    $(".order-description").text(writeOrderDescription());
  });


  // Done with order
  $("#order-btn").click(function(event) {
    if (typeof size === "undefined") {
      $("#size-error").hide().fadeIn();
    } else {
      pizza = new Pizza(size, toppings, glutenFree, vegan);
      debugger;
      pizza.calculatePrice();
      $("#order-price").text("$" + pizza.price);
      $(".order-description").text(writeOrderDescription());

      // Generate random order number
      $("#order-number").text(Math.floor(Math.random() * 9999) + 1000);

      $("#order").fadeOut("slow");
      $("#checkout").hide().fadeIn("slow");
    }
  });

  // Update total price when quantity changes
  $("#quantity").change(function(event) {
    quantity = $("#quantity").val();
    var newOrderPrice = (pizza.price * quantity).toFixed(2);

    $("#order-price").text("$" + newOrderPrice);
    $(".order-description").text(writeOrderDescription());
  });

  // Refresh for a new order
  $("#new-order").click(function(event) {
    location.reload();
  });
});
