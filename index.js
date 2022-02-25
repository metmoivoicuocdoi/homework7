let btn = document.querySelector(".btn");
console.log(btn.innerHTML);
btn.addEventListener('click', function() {
    localStorage.clear();
    let username = document.getElementById("username");
    console.log(username);
    let password = document.getElementById("password");
    let passwordR = document.getElementById("passwordR");
    if (passwordR.value == password.value) {
        localStorage.setItem("password", password.value);
        localStorage.setItem("username", username.value);
        alert("Đăng ký thành công")
    }
    else {
        alert("Mật khẩu nhập lại chưa đúng")
    }
    window.location.replace("./home.html")
})

