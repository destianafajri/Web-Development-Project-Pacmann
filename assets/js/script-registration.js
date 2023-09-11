const btnRegis = document.getElementById("btn-registration");

btnRegis.addEventListener("click", (event) => {
    event.preventDefault();
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let konfirmpassword = document.getElementById('konfirmpassword').value;
    if(nama && email && password && konfirmpassword){
        if(password == konfirmpassword){
            //alert("Daftar akun dinonaktifkan sementara")
             window.location.href = "/login.html";
        }else{
            window.alert("Mohon maaf password anda tidak sama");
        }
    }else{
       window.alert("Masukan data dengan benar!");
    }
})