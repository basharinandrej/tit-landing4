document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn--js')
    const mainMenu = document.querySelector('.main-menu--js')

    burgerBtn.addEventListener('click', toggleMenuHandler)

    function toggleMenuHandler() {
        if (mainMenu) {
            mainMenu.classList.toggle('main-menu--open')
            this.classList.toggle('open')
        }
    }

}, false);
