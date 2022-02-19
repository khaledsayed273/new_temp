let dom = document.querySelector('.parent-of-carts')

let carts = document.querySelector('.about-products p')

let more_products = document.querySelector('.about-products')

let icon = document.querySelector('.fa-cart-arrow-down')

let data = [{
        id: 1,
        title: 'Iphone',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur rerum ea consectetur nemo minus?',
        img: '../project 1/imges/840_560.jfif'
    },
    {
        id: 2,
        title: 'Iphone x',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur rerum ea consectetur nemo minus?',
        img: "../project 1/imges/iphone x.jpg"
    },
    {
        id: 3,
        title: 'Laptop',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur rerum ea consectetur nemo minus?',
        img: '../project 1/imges/laptop (2).jpg'
    },
    {
        id: 4,
        title: 'Infinix',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur rerum ea consectetur nemo minus?',
        img: '../project 1/imges/Infinix10.jpg'
    },
    {
        id: 5,
        title: 'Pc',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur rerum ea consectetur nemo minus?',
        img: '../project 1/imges/61kOasVVRnL._AC_SX466_.jpg'
    },
    {
        id: 6,
        title: 'Ps5',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequuntur rerum ea consectetur nemo minus?',
        img: '../project 1/imges/ps5.jpg'
    },
]


JSON.stringify(localStorage.setItem('productsdata', data))

function drawui() {
    let ui = data.map((item) => {
        return `
    <div class="cart">
                    <div class="parent-of-imege">
                        <img src="${item.img}"">
                    </div>
                        <div class="parent-of-title">
                            <h2 class="title">${item.title}</h2>
                        </div>
                        <div class="parent-of-p">
                        <p>${item.p}</p>
                        </div>
                        <div class="parent-of-add">
                            <button class="add" onclick= addedtocart(${item.id})>Add To cart</button>
                            <button id="heart"><i class="fa-solid fa-heart"></i></button>
                        </div>
                </div>
    `
    })
    dom.innerHTML = ui

}

drawui()


function addedtocart(id) {
    if (localStorage.getItem('email')) {
        let padge = document.querySelector('.padge')
        let chousenuitem = data.find((item) => item.id === id)
        carts.innerHTML += `<p class="p-of-carts">${chousenuitem.title}</p>`
        let cartproductsleangh = document.querySelectorAll('.p-of-carts');
        if (padge.innerHTML <= 1) {
            padge.style.display = 'block'
        }

        padge.innerHTML = cartproductsleangh.length
    } else {
        let con = confirm("Sorry But you Have To Login First")
        if (con == true) {
            setTimeout(function () {
                window.location = 'login.html'
            }, 1000)
        }
    }
}


icon.onclick = function () {
    if (more_products.style.display == 'block') {
        more_products.style.display = 'none'
    } else {
        more_products.style.display = 'block'
    }
}