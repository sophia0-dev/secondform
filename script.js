let button = document.getElementById("btn");
let input = document.getElementsByTagName("input");
let email = document.getElementById('email');
let password = document.getElementById('password');
let username = document.getElementById('username');
let form = document.getElementById("form");


//button turns blue on click and input border turns blue too
button.addEventListener("click", function modifyFunction (){
    button.style.backgroundColor = "rgb(36, 89, 249)";
    button.style.color = "white";


    email.style.border = "2px solid rgb(36, 89, 249)";
    password.style.border = "2px solid rgb(36, 89, 249)";
    username.style.border = "2px solid rgb(36, 89, 249)";

});

//button turns green on submission

form.addEventListener("submit", function modifyFunction2 (){
    button.style.backgroundColor = "rgb(129, 207, 12)";
});
