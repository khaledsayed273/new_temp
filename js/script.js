let user = document.querySelector('.fa-user')

let more = document.querySelector('.the-more')

let bars = document.querySelector('.fa-bars')

let head = document.querySelector('.head')

let add = document.querySelectorAll('.add')

let logout = document.getElementById('out')

user.onclick = function () {
    if (more.style.display == 'block') {
        more.style.display = 'none'
    } else {
        more.style.display = 'block'
    }
}


bars.onclick = function () {
    if (head.style.display == 'flex') {
        head.style.display = 'none'
    } else {
        head.style.display = 'flex'
    }
}

logout.onclick = function () {
    localStorage.clear()
}

if (localStorage.getItem('email') || localStorage.getItem('name')) {
    user.style.color = 'red'
    let name = document.querySelector('.the-more-name')
    let logout = document.querySelector('.logout')
    logout.style.display = 'flex'
    name.style.display = 'flex'
    more.style.height = '250px'
    name.innerHTML = localStorage.getItem('name')
}