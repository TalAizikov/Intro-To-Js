fill(17, 0, 255);

// a handy dandy ruler across the top
var x = 0;
var y = 0;
text(x, x, 10); 
while (x < 400) {
    text(x,x,10);
    x +=50;
}
while (y < 400) {
    text(y,10,y);
    y +=50;
}
