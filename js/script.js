
window.onload = function mobileClick() {
    document.addEventListener('click', documentActions)

    function documentActions (elem) {
        const targetElement = elem.target;

        if (window.innerWidth > 768 && isMobile.any()) {
            if(targetElement.classlist.contains('menu__arrow')){
                targetElement.closest('.menu__item').classList.toggle('_hover');
            }
        }
    }
}

mobileClick();