var recipeTitle = "Cake";
var recipeServings = 2;
var recipeIngredients = ["Water", "Sugar"];

var makeCake = {
    title: "cake",
    servings: 2,
    ingredients: ["Water" , "Sugar"]
    
};
fill(26, 26, 26);
textSize(20);
text(makeCake.title, 10, 23);
text("Serves: " + makeCake.servings, 10, 55);
text("Ingredients: " + makeCake.ingredients, 10, 85);
