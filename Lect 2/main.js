// console.log("hello")

// dùng vòng lặp while in chữ hello ra 7 lần
// let i = 7;
// while (i > 0) {
//     console.log(i)
//     console.log("hello")
//     i--
// }

// do {
//     console.log(i)
//     console.log("hello")
//     i--
// } while (i > 0)

for (i = 7; i > 0; i--) {
    console.log(i)
    console.log("hello")
}

// dùng for lặp lại câu hello world lên màn hình trang web (5 lần)
// gợi ý: dùng innerHTML

// for(i = 5; i > 0; i--) {
//     console.log(i)
//     document.getElementById("my-text").innerHTML += `<p class="blue-50">hello</p>`
// }

// let arr = ["duy", 3, "giang", "jsa06", true, 99.9]
// arr.length
// arr.push("quang")
// arr.pop()
// arr.shift()
// arr.unshift("duy")
// arr.splice(2, 3)
// arr.splice(1, 0, "quang", 99.9)
// arr[2] = "jsb04"

// dùng for vẽ hình chữ nhật với dấu *
// ****
// ****

// for(i = 0; i < 5; i++) {
//     for(j = 0; j < 10; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }

let car = {
    color: "red",
    id: "1234H",
    brand: "Mecesdes"
}

let computer = {
    cpu: "i7",
    gpu: "4090",

}

let yourComp = new Object()