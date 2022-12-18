console.log("hello")

// Save Data to Local Storage (localStorage.setItem(key, value);)
/*  localStorage.setItem("name1", "giang")
    localStorage.setItem("name2", "khiet")
    localStorage.setItem("age", "16")       */

// Read Data from Local Storage (localStorage.getItem(key);)
/* localStorage.getItem("name1") */

// Remove Data from Local Storage (localStorage.removeItem(key);)
/* localStorage.removeItem("name") */

// Clear Local Storage (localStorage.clear();)
/* localStorage.clear() */


// JSON stringify
// const obj = {name: "ha", age: 15, city: "hcm"};
// const myJSON = JSON.stringify(obj);
// const arr = ["khiet", "quang", "khoa", "hoang"];
// const myJSON2 = JSON.stringify(arr);

// JSON parse
// const text = `{"name": "tri", "birth": "2006-12-18", "city": "hcm"}`;
// const obj2 = JSON.parse(text);
// obj2.birth = new Date(obj2.birth);
// document.getElementById("test").innerHTML = obj2.name + ", " + obj2.birth;

// Sign up
let rgBtn = document.getElementById("register")

function registerUser() {
    let mail = document.getElementById("email").value
    let usern = document.getElementById("username").value
    let pw = document.getElementById("password").value

    let user = {
        email: mail,
        username: usern,
        password: pw
    }

    let myJSON = JSON.stringify(user)
    console.log(myJSON)
    localStorage.setItem("user", myJSON)
}
