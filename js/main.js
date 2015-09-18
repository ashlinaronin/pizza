$(document).ready(function() {

  $("body").hide().fadeIn("slow");

  var size, price, pizza;
  var glutenFree = false;
  var vegan = false;
  var toppings = [];


  // Get size from size select menu
  $("#size").change(function() {
    $("#size option:selected").each(function() {
      size = $(this).text();
      console.log("size is " + size);
    });
  });

  // Add chosen toppings to array of toppings
  $("#choose-toppings img").click(function(event) {
    var thisTopping = $(this).attr('id');

    // Add this topping if it hasn't been selected yet
    if (toppings.indexOf(thisTopping) === -1) {
      toppings.push(thisTopping);
    }

    console.log("toppings are " + toppings);
  });


  // Done with order
  $("#order-btn").click(function(event) {
    pizza = new Pizza(size, toppings, glutenFree, vegan);

    console.log("thanks for ordering: " + pizza.size + " " + pizza.toppings);
  });



  // should support back button between pages
});
// // Add extra for daiya
// if (this.toppings.indexOf("daiya") > -1) {
//     totalPrice += daiyaPrices[this.size];
// }
