draw = function() {
    fill(0, 255, 68); // start color

    if (mouseIsPressed && mouseY < 250 && mouseY > 150 && mouseX < 300 && mouseX > 50) { 
        fill(33, 112, 52); // click color
    }
    rect(50, 150, 250, 100);  // the button

    // The button text
    fill(0, 0, 0);
    textSize(30);
    text("PRESS ME!", 93, 193);
};