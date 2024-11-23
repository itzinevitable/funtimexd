const loginbox = document.getElementById("login");
const passbox = document.getElementById("password");
const recieverbox = document.getElementById("person");
const msgbox = document.getElementById("msg")

//for chat thingy
// const el = document.createElement('li');
// el.innerHTML = text;
// document.querySelector('ul').appendChild(el)


function createAccount(){
    fetch("http://localhost:8080/api/login/register", {
        method: "post",
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            "username": loginbox.value,
            "password": passbox.value
        })
    })
    .then(response => {
        if(!response.ok){
            throw new Error("Server is down")
        }
        return response.text();
    })
    .then((dataStr) =>{
        if(dataStr == "User already existent"){
            alert("Username taken, try again.")
        }
    })
    .catch((error) =>{
        alert("Server is down.")
    });
    
}

function sendMessage(){
    if(recieverbox.value == "" || msgbox.value == ""){
        alert("Please fill out both boxes before sending a message.")
    }

    fetch("http://localhost:8080/api/msg/send"{
        method: "post",
        headers: "application/json;charset=UTF-8",
        body: JSON.stringify({

        })

    })
}