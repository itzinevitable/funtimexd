const loginbox = document.getElementById("login");
const passbox = document.getElementById("password");

//for chat thingy
// const el = document.createElement('li');
// el.innerHTML = text;
// document.querySelector('ul').appendChild(el)


function createAccount(){
    fetch("http://localhost:8080/api/logininfo", {
        method: "post",
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            "username": loginbox.value,
            "password": passbox.value
        })
    })
    .then(response => response.text())
    .then((dataStr) =>{
        if(dataStr == "User already existent"){
            alert("Username taken, try again.")
        }
    });
    
    alert("New Account Created -> ");
}

function sendMessage(){

}