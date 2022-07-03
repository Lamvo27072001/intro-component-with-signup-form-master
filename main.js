let submit = document.getElementById("submit")
let ten = document.getElementById("name")
let lname = document.getElementById("lastname")
let email = document.getElementById("email")
let password = document.getElementById("password")
let err1 = document.getElementById("err1")
let err2 = document.getElementById("err2")
let err3 = document.getElementById("err3")
let err4 = document.getElementById("err4")

submit.onclick = () => {
    if (ten.value == "" && lname.value == "" && email.value == "" && password.value == "") {
        alert("You should enter full your information")
    } else if (ten.value == "" || lname.value == "" || email.value == "" || password.value == "" || email.value.charAt(email.value.length - 4) !== "." && email.value.charAt(email.value.length - 3) !== ".") {
        check()
    } else {
        alert("Sign up successfully!")
    }

}

const check = () => {

    if (ten.value == "") {
        err1.style.display = "inline-block"
        err1.style.width = "20px"
        err1.style.height = "20px"
        ten.style.marginRight = "0px"
        alert("Name cannot be empty")
    } else {
        err1.style.display = "none"
    }
    if (lname.value == "") {
        err2.style.display = "inline-block"
        err2.style.width = "20px"
        err2.style.height = "20px"
        lname.style.marginRight = "0px"
        alert("LastName cannot be empty")
    } else {
        err2.style.display = "none"
    }
    if (email.value == "") {
        err3.style.display = "inline-block"
        err3.style.width = "20px"
        err3.style.height = "20px"
        email.style.marginRight = "0px"
        alert("Email cannnot be empty")
    } else if (email.value.charAt(email.value.length - 4) !== "." && email.value.charAt(email.value.length - 3) !== ".") {
        err3.style.display = "inline-block"
        err3.style.width = "20px"
        err3.style.height = "20px"
        email.style.marginRight = "0px"
        alert("Email format is not correct")
    } else {
        err3.style.display = "none"
    }
    if (password.value == "") {
        err4.style.display = "inline-block"
        err4.style.width = "20px"
        err4.style.height = "20px"
        password.style.marginRight = "0px"
        alert("Password cannot be empty")
    } else {
        err4.style.display = "none"
    }
}