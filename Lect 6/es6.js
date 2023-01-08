console.log("hello 2")

// -- ES5 --
// function add(a, b) {
//     return a + b;
// }

// let add = function(a, b) {
//     return a + b;
// }

// -- ES6 --
let add = (a, b) =>  a + b;

class Car {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }

    run = () => console.log(this.brand + " run")

}

let max = (a, b) => {
    // if(a > b) {
    //     console.log(a);
    // } else {
    //     console.log(b);
    // }

    // condition ? true : false
    return a > b ? console.log(a) : console.log(b);
}

let pyramid = (n) => {
    
}
