//callback function==> it is a function which takes an function as an argument
//Why callback func
//We need callback func to handle the asynchronous behavior of js
function first(callback) {
    setTimeout(() => {
        console.log("first executed");
        callback();
    }, 6000);
}

function second() {
    setTimeout(() => {
        console.log("hello");
    }, 2000);
}
first();
second();

//callback hell
//call back inside a call back will lead to call back

// const animateAll = (animate) => {
//     setTimeout(() => {
//         animate();
//         setTimeout(() => {
//             animate();
//             setTimeout(() => { })
//         })
//     })
// }
