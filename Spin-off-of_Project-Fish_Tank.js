background(89, 216, 255);

var bodyLength = random (0,200);
var bodyHeight = random (0,200);


var drawFish = function(bodyLength, bodyHeight  ) {
    var centerX = random (0,400);
var centerY = random (0,400);
var bodyColor = color(random (0,365), random (0,365), random (0,365));
    noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
         
};
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
drawFish(bodyLength, bodyHeight );
