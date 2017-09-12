// position of the ball
var y = 0;
// how far the ball moves every time
var speed = 2;

draw = function() {
    background(127, 204, 255);
    
    fill(66, 66, 66);
    ellipse(200, y, 50, 50);

    // move the ball
    if (y > 400) {
        speed = -2;
    }
    if (y < 0) {
        speed = 2;   
    }
    y = y + speed;
};
