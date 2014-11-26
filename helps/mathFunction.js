//-----------Shuffle Array----------------
Math.shuffle=function(array) {
    var currentIndex = array.length,temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;    }
    return array;
};
//Example:
var a=[34,5,26,9,17];
console.log(Math.shuffle(a));