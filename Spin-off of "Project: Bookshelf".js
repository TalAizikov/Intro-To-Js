var book = [
    {
        title: "The Giver",
        stars: 4,
        pageAmount: 400
    },
    {
        title: "Harry Potter",
        stars: 5,
        pageAmount: 700 
    },
    {
        title: "The Witch",
        stars: 2,
        pageAmount: 150  
    }
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw one book
for (var u = 0; u < book.length; u++) {
    fill( 50, u * 160, u * 240);
    rect(140 * u + 10, 20, 90, 100);
    if (u === 0) {
        fill(255, 255, 255);  
    }
    else {
        fill(0, 0, 0);
}
    text(book[u].title, 15 + (u * 140), 29, 70, 100);
    text(book[u].pageAmount, 15 + (u * 140), 56);
    for (var i = 0; i < book[u].stars; i++) {
        image(getImage("cute/Star"),u * 140 + 13 + (i * 16), 90, 20, 30);
    }
}
