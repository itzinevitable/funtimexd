const loginbox = document.getElementById("login")
const passbox = document.getElementById("password")



function sendToAPI(){

    fetch("http://localhost:8080/api/logininfo", {
        method: "post",
        body: JSON.stringify({
            username: loginbox.value,
            password: passbox.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    alert("New Account Created, Check API");

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