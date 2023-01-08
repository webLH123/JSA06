console.log("hello")

// Sign up
let rgBtn = document.getElementById("register");
// let logBtn = document.getElementById("login");
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

// logBtn.addEventListener("click", function (el) {
//     el.preventDefault();
//     checkLogin()
// });

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
    console.log(objArr)
    for (i = 0; i < objArr.length; i++) {
        console.log(objArr[i].username)
        console.log(objArr[i].password)
        if (usernlg != objArr[i].username) {
            alert("User is not existed");
            return false;
        } else {
            if (pwlg != objArr[i].password) {
                alert("Wrong password");
                return false;
            } else {
                alert("Login success");
                // document.location.href = "index.html";
                return true;
            }
        }
    }
}