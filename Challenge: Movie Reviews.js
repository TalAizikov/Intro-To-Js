var movies = [
    {
        title: "Puff the Magic Dragon",
        review: "Best movie ever!!"
    },
    {
        title: "Harry Potter!",
        review: "My fave!" 
    }
];

fill(84, 140, 209);
textAlign(CENTER, CENTER);
for (var i = 0; i < movies.length; i++) {
    textSize(20);
    text(movies[i].title, 200, 80*i + 50);
    textSize (18);
    text(movies[i].review, 200, 80*i + 80);
}
