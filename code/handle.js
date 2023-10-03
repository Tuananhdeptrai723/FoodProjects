const btnMenu = document.querySelector('.js-btn-menu');
const modal = document.querySelector('.js-modal-menu');
const btnCloseMenu = document.querySelector('.js-btn-close');



function showMenu() {
    modal.classList.add('open');
    modal.classList.add('animationIn');
}


function hideMenu() {
    modal.classList.remove('open');
}


btnMenu.addEventListener('click', showMenu);

btnCloseMenu.addEventListener('click', hideMenu);


// add to cart

const btnCart = document.querySelectorAll('.btn-cart')
const btnCloseCart = document.querySelector('.md_cart_close') 
const btnOpenCart = document.querySelector('.js-btn-open-cart')
const modalCart = document.querySelector('.js-modal_cart')
const cartContainer = document.querySelector('.md_cart_container')


function showCart() {
    modalCart.classList.add('open');
    modalCart.classList.add('animationIn');
}

function animationOpacity() {
}


function hideCart() {
    modalCart.classList.remove('open');

}

btnOpenCart.addEventListener('click', showCart);
btnCloseCart.addEventListener('click', hideCart);

const product = [
    {
        id: 0,
        image: '../asset/img/food1.png',
        title: 'Special Beef ',
        price: 11
    },

    {
        id: 1,
        image: '../asset/img/food2.png',
        title: 'Special Beef ',
        price: 12
    },

    {
        id: 2,
        image: '../asset/img/food3.png',
        title: 'Chicken Fry Pack',
        price: 13
    },

    {
        id: 3,
        image: '../asset/img/food3.png',
        title: 'Chicken Fry Pack',
        price: 13
    },

    {
        id: 4,
        image: '../asset/img/food3.png',
        title: 'Chicken Fry Pack',
        price: 13
    },

    {
        id: 5,
        image: '../asset/img/food3.png',
        title: 'Chicken Fry Pack',
        price: 13
    },

    {
        id: 6,
        image: '../asset/img/food3.png',
        title: 'Chicken Fry Pack',
        price: 13
    },
];

const categories = [...new Set(product.map((item) => 
    {return item}))
]
let i = 0;

document.getElementById("root").innerHTML = categories.map((item) => {
    var {image, title, price} = item;
    return(
        `
        <div class="box">
            <div class="box-img">
                <img src=${image}></img>
            </div>
                <h2>${title}</h2>
                <h3>Tasty Food</h3>
                <span>${price}.00$</span>

        `+
        "<button class='btn-cart' onclick='addToCart("+(i++)+")'><i class='bx bx-cart'></i></button>" 
        +
        `</div>` 
    )
}).join('');

document.getElementById("js-direction").innerHTML += `
    <div class='direction'>
        <button id='prev'> < </button>
        <button id='next'> > </button>
    </div>`;


var cart = [];

function addToCart(a) {
    cart.push({...categories[a]});
    displaycart();
    console.log(111);
}

function delElement(a) {
    cart.splice(a,1);
    displaycart();
}

function displaycart(a) {
    let j  =  0;
    var total_money = 0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total_money').innerHTML = "Total: "+"$ "+ 0 +".00";

    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var {image, title, price} = items
            total_money = total_money + price;
            document.getElementById("total_money").innerHTML = "Total: " + "$ " +total_money+".00";
            return(
            `<div class="md_box-cart">
                <div class="md_box_food">
                    <img src=${image}></img>
                    <p>${title}</p>
                    <p class="md_price">${price}.00</p>
                </div>` +
                "<div class='md_box-add' onclick ='delElement("+(j++)+")'><i class='bx bxs-trash-alt' ></i></div> " +
                
            `</div>`
            )
        }).join('');
    }
}

// Nav pointer
const pointers = document.querySelectorAll('.js-pointer');
let selectedPointer = null;

function pointerColor(event) {
    if (selectedPointer) {
        selectedPointer.classList.remove('navPointer');
    }

    const currentPointer = event.currentTarget;
    currentPointer.classList.add('navPointer');
    selectedPointer = currentPointer;
    console.log(111);
}

pointers.forEach((pointer) => {
    pointer.addEventListener('click', pointerColor);
});


// direction

document.getElementById('next').onclick = function() {
    const widthItem = document.querySelector('.box').offsetWidth;
    document.getElementById('root').scrollLeft += widthItem;
}

document.getElementById('prev').onclick = function() {
    const widthItem = document.querySelector('.box').offsetWidth;
    document.getElementById('root').scrollLeft -= widthItem;
}



