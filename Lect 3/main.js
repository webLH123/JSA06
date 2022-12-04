let arr = [1, 2, "abc"]

let person = {
    name: "giang",  // index 0
    age: 21         // index 1
}

let people = [
    {name: "duy", age: 20},
    {name: "khiet", age: 18},
    {name: "khoa", age: 19}
]

let text1 = "";
for (let x in person) {
  text1 += " " + person[x];
}

let text2 = "";
for (let x of arr) {
  text2 += x + " ";
}

let text3 = "";
for(let i = 0; i < arr.length; i++) {
    text3 += arr[i] + " ";
}


let text4 = "";
arr.forEach(x => {
    text4 += x + " ";
});





























// function myFunction() {
//     let input = document.getElementById('mySearch');
//     let filter = input.value.toUpperCase();
//     let ul = document.getElementById("myList");
//     let li = ul.getElementsByClassName('listItem');

//     for (let i = 0; i < li.length; i++) {
//         let a = li[i].getElementsByClassName("itemText")[0];
//         let txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "block";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }