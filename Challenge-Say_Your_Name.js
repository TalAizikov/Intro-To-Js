
var yourName = "Tal";
var myName = function() {
   fill(255, 0, 0);
    textSize(30);
    var textX = random(0, 300);
    var textY = random(0, 300);
    text("Hiiii, " + yourName, textX, textY);
};

myName();
myName();
myName();
myName();
