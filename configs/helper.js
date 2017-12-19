
function helloWorld() {
    var str = "Hello world!";
    return str;
}

function helloWorld1() {
    console.log("Hello world 1!!!")
    console.log(helloWorld());
}

module.exports = function () {
    helloWorld();
    helloWorld1();
}