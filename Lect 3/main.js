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

function searchName() {
    // khai báo DOM cho thẻ input
    let input = document.getElementById('mySearch');
    // chuyển dữ liệu nhập vào ở thẻ input thành dạng in hoa
    let inputValue = input.value.toUpperCase();
    // khai báo DOM cho thẻ ul
    let ul = document.getElementById("myList");
    // khai báo DOM cho tất cả thẻ li (danh sách li)
    let li = ul.getElementsByClassName('listItem');

    // sử dụng vòng lặp để lặp qua hết danh sách thẻ li
    for (let i = 0; i < li.length; i++) {
        // khai báo DOM cho thẻ a nằm trong thẻ li
        let a = li[i].getElementsByClassName("itemText")[0];
        // tạo biến chứa dữ liệu text từ thẻ a
        let txtValue = a.textContent || a.innerText;
        // kiểm tra bằng hàm indexOf xem có lấy được chữ từ txtValue không
        if (txtValue.toUpperCase().indexOf(inputValue) > -1) {
            // nếu được thì hiển thị thẻ lên
            li[i].style.display = "block";
        } else {
            // nếu không thì ẩn thẻ đi
            li[i].style.display = "none";
        }
    }
}