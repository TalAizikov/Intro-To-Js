draw = function() {
    noStroke();
    if (mouseIsPressed) {
        fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 50, 50);
    }
};
