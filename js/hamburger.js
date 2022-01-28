window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.burger_overlay'),
    menuItem = document.querySelectorAll('.burger_item'),
    hamburger = document.querySelector('.hamburger'),
    close = document.querySelector('.close_menu'),
    html = document.querySelector('html');
    

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('__active');
        html.classList.toggle('__lock');
    });

    close.addEventListener('click', () => {
        menu.classList.toggle('__active');
        html.classList.toggle('__lock');
    });
    console.log(menuItem)
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('__active');
            html.classList.toggle('__lock');
        })
    })
})

