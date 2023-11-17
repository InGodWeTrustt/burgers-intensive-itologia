document.getElementById('main-action-button').onclick = function () {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" })
}

let links = document.querySelectorAll('.menu-item > a')
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({ behavior: "smooth" })
    }
}

let buttons = document.getElementsByClassName('product-button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({ behavior: "smooth" })
    }
}


let prices = document.getElementsByClassName('products-item-price');
document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = '$'
    let coefficient = 1;
    if (currentCurrency === "$") {
        newCurrency = '₽';
        coefficient = 80;
    } else if (currentCurrency == "₽") {
        newCurrency = "BYN";
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        const product = prices[i];
        product.innerText = `${+(product.getAttribute('data-base-price') * coefficient).toFixed(1)} ${newCurrency}`
    }
}



let burger = document.getElementById('burger')
let name = document.getElementById('name')
let phone = document.getElementById('phone')

let modal = document.querySelector('#modal')
let closeModalBtn = document.getElementById('closeModal')

closeModalBtn.addEventListener('click', () => {
    modal.classList.toggle('active')
})

document.getElementById('order-action').onclick = function () {
    let hasError = false;

    [name, burger, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red"
            hasError = true;
        } else {
            item.parentElement.style.background = ""
        }
    })

    if (!hasError) {
        const data = {
            productName: burger.value,
            buyerName: name.value,
            number: phone.value,
            orderNumber: Date.now().toString().slice(-5)
        }

        Object.values(data).forEach(([k, v]) => {
            const p = document.createElement('p');
        });

        modal.classList.toggle('active');

        [burger, name, phone].forEach(item => {
            item.value = '';
        })
    }
}