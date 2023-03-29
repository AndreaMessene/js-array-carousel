const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log (prev, next)

next.addEventListener('click', function () {

    let activeItem = document.querySelector('.item.active')

    console.log (activeItem)

    let nextItem = activeItem.nextElementSibling

    console.log (nextItem)

    // activeItem.classList.remove('active')

    // itemToActive.classList.add('active')


})