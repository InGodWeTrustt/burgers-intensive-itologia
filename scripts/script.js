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
        modal.classList.toggle('active');
        [burger, name, phone].forEach(item => {
            item.value = '';
        })
    }
}

const productsItems = document.querySelectorAll('.products-item');

// Создаем пустой массив
const productsData = [];

// Проходимся по всем элементам products-item и добавляем их свойства в массив products
productsItems.forEach(item => {
    const text = item.querySelector('.products-item-text').innerText;
    const title = item.querySelector('.products-item-title').innerText;
    const price = item.querySelector('.products-item-price').getAttribute('data-base-price');
    debugger;
    let image = item.querySelector('.products-item-image > img').getAttribute('src');
    let grams = item.querySelector('.products-item-weight').innerText;

    // Делим текст по разделителю
    const parts = image.split('/');
    // Получаем название файла с расширением
    image = parts[parts.length - 1];

    // Тоже самое с весом, я делю по пробелу и получаю первый элемент
    grams = grams.split(' ')[0]
    // Создаем объект с свойствами title и price и добавляем его в массив products
    productsData.push({
        title,
        price,
        basePrice: price,
        text,
        image,
        grams
    });
});

console.log(productsData);