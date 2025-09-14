// head section. Mobile menu

const menu = document.querySelector("#mobile__menu")
const spisok = document.querySelector(".nav-menu")

menu.addEventListener('click', function() {
    menu.classList.toggle("is-active")
    spisok.classList.toggle("active")
})

// advantage section. chose image and active text

const text = document.querySelectorAll('.text-wrap');
const images = document.querySelectorAll('.image');
const slider = document.querySelector('.advantage-images');
const Imageindex = [1, 2, 3, 4, 5, 6];

text.forEach(function(element) {
    element.addEventListener('mouseover', activeText)
})

function activeText() {
    text.forEach(function(element) {
        element.classList.remove('active-text');
    })
    this.classList.add('active-text')
    let textName = this.getAttribute ('data-text')
    activeImage(textName)
}

function activeImage(textName) {
    images.forEach(function(imgItem) {
        if (imgItem.classList.contains(textName)) {
            imgItem.classList.add('active-img')
        } else {
            imgItem.classList.remove('active-img')
        }
    })
}


// production section

const listItems = document.querySelectorAll('.production-item')
const blocks = document.querySelectorAll('.image-block')

listItems.forEach(function(item) {
    item.addEventListener('mouseover', activeItem)
})

function activeItem() {

    listItems.forEach(function(item) {
        item.classList.remove('active-item');
    })

    this.classList.add('active-item')
    let itemName = this.getAttribute ('data-item')
    activeBlock(itemName);
}

function activeBlock(itemName) {
    blocks.forEach(function(blockItem) {
        if (blockItem.classList.contains(itemName)) {
            blockItem.classList.add('active-block')
        } else {
            blockItem.classList.remove('active-block')
        }
    })
}
// автоматическое переключение блока через время
let currentItem = 0;
const lastItem = listItems.length - 1;

function nextElement() {
    let nextItem = currentItem + 1;
    if (nextItem > lastItem) {
        nextItem = 0;
    }
    setTimeout(function () {
        listItems.forEach(function(item) {
            item.classList.remove('active-item');
        })
        listItems[nextItem].classList.add('active-item');
        let itemName = listItems[nextItem].getAttribute ('data-item')
        activeBlock(itemName);
        setTimeout(() => {
            listItems[currentItem].classList.remove('active-item');
        }, 5000);
        currentItem++
        if (currentItem > lastItem) {
            currentItem = 0;
        }
        nextElement()
    }, 5000);
}

nextElement()