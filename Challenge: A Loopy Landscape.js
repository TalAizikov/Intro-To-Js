background(144, 240, 234);
var treeX = 0;
// Draw the sun
noStroke();
fill(255, 140, 0);
ellipse(335, 66, 70, 70);

// Get images from library and remember in variables
var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");

// Draw the tree and grass once
while (treeX < 400) {
image(grass, treeX, 270);
image(tree, treeX, 200);
treeX += 101;
}
