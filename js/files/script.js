window.addEventListener('load',function() {
    document.addEventListener("click", headerActions);

	function headerActions(elem) {
		const targetElement = elem.target;

		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow-icon')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
            }
			if(!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover')
			} 
    	}

		if (targetElement.classList.contains('search-form__btn-hidden')) {
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
	
	//Header scroll
	const header = document.querySelector('.header');

	const callback = function (entries, observer) {
		if(entries[0].isIntersecting) {
			header.classList.remove('_scroll');	
		} else {header.classList.add('_scroll');}
	}

	const headerObserved = new IntersectionObserver(callback);
	headerObserved.observe(header);

});

window.addEventListener('load',function() {
    document.addEventListener("click", footerActions);
	
	function footerActions(elem) {
		const targetElement = elem.target;

		// как лучше было реализовать эту логику?
		if (targetElement.classList.contains('_title1')) {
			document.querySelector('._list1').classList.toggle('_open')
			document.querySelector('._title1').classList.toggle('_open')
		}
		if (targetElement.classList.contains('_title2')) {
			document.querySelector('._list2').classList.toggle('_open')
			document.querySelector('._title2').classList.toggle('_open')
		}
		if (targetElement.classList.contains('_title3')) {
			document.querySelector('._list3').classList.toggle('_open')
			document.querySelector('._title3').classList.toggle('_open')
		}
	}
});

window.addEventListener('load',function() {
	
	
});










