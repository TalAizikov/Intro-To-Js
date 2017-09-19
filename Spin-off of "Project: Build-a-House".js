background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(180, 280, 40, 77);

// Windows\
var x = 110;
while (x < 250){
fill(110, 241, 255);
rect(x,174,50,50);
//inside sticks
fill(133, 112, 56);
rect(x,198,50,4);
rect(x+24,174,4,50);
fill(32, 54, 3);
rect(180, 280, 40, 85);
x += 134;
}
var Y = 0;
var grass = getImage("cute/GrassBlock");
while (Y<380){
Y+=20;
image(grass, 0, 346, Y++, 50);    
}
