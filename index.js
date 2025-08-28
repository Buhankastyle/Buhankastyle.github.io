// head section. Mobile menu

const menu = document.querySelector("#mobile__menu")
const spisok = document.querySelector(".nav-menu")

menu.addEventListener('click', function() {
    menu.classList.toggle("is-active")
    spisok.classList.toggle("active")
})

// advantage section. chose image and active text

const text = document.querySelectorAll('.text-wrap')
const images = document.querySelectorAll('.image')

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
let index = 0
const newList = [...listItems]

listItems.forEach(function(item) {
    item.addEventListener('mouseover', activeItem)
})

function activeItem() {

    listItems.forEach(function(item) {
        item.classList.remove('active-item');
    })

    this.classList.add('active-item')
    let itemName = this.getAttribute ('data-item')
    activeBlock(itemName)
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


