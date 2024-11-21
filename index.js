const loginbox = document.getElementById("login");
const passbox = document.getElementById("password");



function sendToAPI(){

    fetch("http://localhost:8080/api/logininfo", {
        method: "post",
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            "username": loginbox.value,
            "password": passbox.value
        })
    });

    
    alert("New Account Created -> ");

    // fetch("http://127.0.0.1:5500/api/testing/1", {
    //     method: "get",
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // })
    // .then(res => res.json())
    // .then(res => {
    //     console.log(res);
    // })
    
}