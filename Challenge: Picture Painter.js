var paintBrush = {
    x: 150,
    y: 150,
    img: getImage("avatars/aqualine-ultimate")
};

var paintCanvas = function() {
    imageMode(CENTER);
    image(paintBrush.img, paintBrush.x, paintBrush.y);
};

mouseMoved = function () {
    paintBrush.x = mouseX;
    paintBrush.y = mouseY;
paintCanvas();  
};
