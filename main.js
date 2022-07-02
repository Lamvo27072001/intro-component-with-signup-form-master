let submit = document.getElementById("submit")
let ten = document.getElementById("name")
let lname = document.getElementById("lastname")
let email = document.getElementById("email")
let password = document.getElementById("password")

submit.onclick = () => {
    if (ten.value == "" || lname.value == "" || email.value == "" || password.value == "") {
        alert("Please enter full your information!")
    } else {
        alert("Claim successfully your trial")
    }
}