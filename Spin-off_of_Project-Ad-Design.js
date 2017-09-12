    var rot = 0;
draw = function() {
    
    background(255, 255, 255);
    fill(0, 68, 255);
textSize(37);
text("STUFFED WINSTON!", 15, 62);
fill(38, 255, 0);
textSize(17);
text("SO SOFT! DON'T GO TO SLEEP WITHOUT ONE!", 10, 87);
//Pillow
  fill(232, 232, 232);
rotate(rot);
rot ++;
ellipse( 200, 200, 210, 95);
ellipse( 143, 193, 26, 40);
ellipse( 199, 193, 26, 40);
ellipse( 257, 193, 26, 40);
rotate(rot - 5);
};
