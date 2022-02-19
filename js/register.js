let name = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let submit = document.getElementById('submit')

submit.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', password.value)
    if (localStorage.getItem('name') && localStorage.getItem('email') && localStorage.getItem('password')) {
        setTimeout(() => {
            window.location = "login.html"
        }, 1500)
    } else {
        alert('برجاء ادخال البيانات ')
    }

}