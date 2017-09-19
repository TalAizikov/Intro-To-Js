var xPositions = [200];
var yPositions = [0];

draw = function() {
    background(204, 247, 255);
    mouseClicked = function () {
        xPositions.push (mouseX);
        yPositions.push (0);
        
    };
    

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if (yPositions[i] > 400) {
            yPositions[i] = 0;
        }
    }
};
