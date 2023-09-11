
const btnLogin = document.getElementById("btn-login")
btnLogin.addEventListener("click", function(event){
    event.preventDefault
    let loginEmail = document.getElementById("email").value
    let loginPassword = document.getElementById("password").value
    if(loginEmail && loginPassword){
        if((loginEmail == "dfr@gmail.com") && (loginPassword == '123')){
            window.location.href = "/todo.html";
        }else{
            window.alert("Email atau Password salah!")
        }
    }else{
        window.alert("Mohon mengisi Form login dengan benar!")
    }
})