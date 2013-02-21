// Brackletess If
(function () {
    if (true) console.log('true');
    else console.log('false');
}());

// Bracketless if with return statement
(function () {
    if (true) return console.log('true')
    else return console.log('false');
}());

// Return statement with Ternary condition
(function () {
    return (true) ?
        console.log('true') :
        console.log('false');
}());


