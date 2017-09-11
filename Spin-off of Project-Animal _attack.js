var bodyX = 200;
var bodyY = 220;
var bodyW = 251;
var bodyH = bodyW/2 + 50;
var earSize =  bodyW / 5, earCupSize = bodyW / 10;
var eyeSize = bodyW / 20;
var mouthW = bodyW / 6, mouthH = bodyW / 14;
var handSize = earSize + 20;


draw = function() {
    background(207, 254, 255);
    
        //Hands + Legs
        fill(181, 143, 82);
    ellipse(bodyX - 117, bodyY - 44, handSize, handSize);
    ellipse(bodyX + 117, bodyY - 44, handSize, handSize);
    ellipse(bodyX - 82, bodyY +90, handSize, handSize);
    ellipse(bodyX + 82, bodyY + 90, handSize, handSize);
    
    fill(92, 66, 5);
        //Ears
    ellipse(bodyX - 40, bodyY - 120,earSize,earSize);
    ellipse(bodyX + 40, bodyY - 120,earSize,earSize);
    fill(222, 188, 77);
    ellipse(bodyX - 40, bodyY - 120,earCupSize,earCupSize);
    ellipse(bodyX + 40, bodyY - 120,earCupSize,earCupSize);
    
    fill(135, 105, 34);
    ellipse(bodyX, bodyY, bodyW, bodyH); // body?
    ellipse(bodyX, bodyY-95, bodyW/ 3 + 20, 83); // face?
    //eyes
    fill(0, 0, 0);
    ellipse(bodyX - 20, bodyY - 110, eyeSize, eyeSize);
    ellipse(bodyX + 20, bodyY - 110, eyeSize, eyeSize);
    //mouth
    fill(150, 0, 0);
    ellipse(bodyX, bodyY - 80, mouthW, mouthH);

};
