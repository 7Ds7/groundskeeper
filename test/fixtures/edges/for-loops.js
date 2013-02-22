(function () {
    for (var i = 0; i < 0; i ++) console.log('for');
}());

(function () {
    for (var i = 0; (console.log(i), i < 0); ++i) console.log(i);
}());
