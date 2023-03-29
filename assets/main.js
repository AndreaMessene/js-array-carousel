let immagini = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log (prev, next)

next.addEventListener('click', function () {

    let activeItem = document.querySelector('.item.active')



    console.log (activeItem)

    let nextItem = activeItem.nextElementSibling

    console.log (nextItem)

    if (activeItem.classList.contains( "last")){
        nextItem = document.querySelector(".first")
    }

    activeItem.classList.remove('active')

    nextItem.classList.add('active')

})

prev.addEventListener('click', function () {

    let activeItem = document.querySelector('.item.active')



    console.log (activeItem)

    let nextItem = activeItem.previousElementSibling

    console.log (nextItem)

    if (activeItem.classList.contains( "first")){
        nextItem = document.querySelector(".last")
    }

    activeItem.classList.remove('active')

    nextItem.classList.add('active')

})


