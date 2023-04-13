
window.onload = function () {
	document.addEventListener("click", headerActions);

	// Actions (делегирование события click)
	function headerActions(elem) {
		const targetElement = elem.target;
		console.log(targetElement)

		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow-icon')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
            }
			if(!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover')
			} 
    	}

		if (targetElement.classList.contains('search-form__btn-hidden')) {
			console.log('пиздец не работает');
			document.querySelector('.search-form__item').classList.toggle('_active')
		} else if (!targetElement.closest('.search-form__item') && document.querySelector('.search-form__item._active')) {
			document.querySelector('.search-form__item').classList.remove('_active')
		}

		// перенести ли это в отдельную функцию и как?
		const burgerMenu = document.querySelector('.menu-icon') 
		if (burgerMenu) {
			const menuBody = document.querySelector('.menu__body')

			burgerMenu.addEventListener('click', function (e) {
				menuBody.classList.toggle('_open')
				burgerMenu.classList.toggle('_open')
			})
		}
		
	}
}


