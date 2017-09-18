fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 6));
textSize(30);
if (answer < 2) {
    text("Yes", 177, 226);
}
else if (answer < 3) {
    text("No", 177, 226);
}
else if (answer < 4) {
    text("Maybe", 158, 226);
}
else {
    text("Something is wrong", 58, 226);
}
