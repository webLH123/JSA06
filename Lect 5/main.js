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
let rgBtn = document.getElementById("register");
let logBtn = document.getElementById("login");
let users = [];

rgBtn.addEventListener("click", function (el) {
    el.preventDefault();
    if (confirmPassword() == true && checkInputValue() == true) {
        registerUser();
        document.getElementById("email").value = "";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmpw").value = "";
    }
});

logBtn.addEventListener("click", function (el) {
    el.preventDefault();
    checkLogin()
});

function registerUser() {
    let mail = document.getElementById("email").value;
    let usern = document.getElementById("username").value;
    let pw = document.getElementById("password").value;

    let user = {
        email: mail,
        username: usern,
        password: pw
    };

    users.push(user);

    let myJSON = JSON.stringify(users);
    console.log(myJSON);
    localStorage.setItem("users", myJSON);
}

function confirmPassword() {
    let pw = document.getElementById("password").value;
    let cfpw = document.getElementById("confirmpw").value;
    if (pw != cfpw) {
        alert("Password is not matched");
        return false;
    }
    return true;
}

function checkInputValue() {
    let usern = document.getElementById("username").value;
    let pw = document.getElementById("password").value;
    if (usern.length < 8) {
        alert("Username is not valid");
        return false;
    }
    if (pw.length < 8) {
        alert("Password is too short");
        return false;
    }
    return true;
}

function checkLogin() {
    let usernlg = document.getElementById("logusername").value;
    let pwlg = document.getElementById("logpassword").value;
    let objArr = JSON.parse(localStorage.users);
    for (i = 0; i < objArr.length; i++) {
        if (usernlg != objArr[i].username) {
            alert("User is not existed");
            return false;
        } else {
            if (pwlg != objArr[i].password) {
                alert("Wrong password");
                return false;
            } else {
                alert("Login success");
                document.location.href = "index.html";
                return true;
            }
        }
    }
}