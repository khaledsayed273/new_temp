let email = document.getElementById('email')
let password = document.getElementById('password')
let submit = document.getElementById('submit')

submit.onclick = function (e) {
    e.preventDefault();
    if (email.value == localStorage.getItem('email') && password.value == localStorage.getItem('password')) {
        setTimeout(function () {
            window.location = "index.html"
        }, 1500)
    } else {
        alert('برجاء ادخال البيانات بالكامل')
    }

}