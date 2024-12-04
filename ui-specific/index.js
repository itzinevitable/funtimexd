function testing(){
    fetch("http://localhost:8080/api/msg/get/itz_inevitable", {
        method: "get"
    })
    .then(response => {
        if(!response.ok){
            throw new Error("get good at coding")
        }
        // return response.json();
    })
    // .then(json =>{
    //     console.log(res)
    // })
    .catch((error) => {
        alert(error);
    })
}