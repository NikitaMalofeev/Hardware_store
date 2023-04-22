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
	document.addEventListener("click", mainActions);
	
	function mainActions(elem) {
		const targetElement = elem.target;

		if (targetElement.classList.contains('products__more')) {
			getProducts(targetElement);
			elem.preventDefault();
		}

		async function getProducts(button) {
			if (!button.classList.contains('_hold')) {
				button.classList.add('_hold');
				const file = "json/products.json";
				let response = await fetch(file, {
					method: "GET"
				});
				if (response.ok) {
					let result = await response.json();
					loadProducts(result);
					button.classList.remove('_hold');
					button.remove();
				} else {
					alert("Error")
				}
			}
		}

		function loadProducts(data) {
			const productsItem = document.querySelector('.products__items');

			data.products.forEach(item => {
				const productId = item.id;
				const productUrl = item.url;
				const productImage = item.image;
				const productTitle = item.title;
				const productText = item.text;
				const productPrice = item.price;
				const productOldPrice = item.priceOld;
				const productShareUrl = item.shareUrl;
				const productLikeUrl = item.likeUrl;
				const productLabels = item.labels;
	
				let productTemplateStart = `<article data-pid="${productId}" class="products__item item-product">`;
				let productTemplateEnd = `</article>`;
	
				let productTemplateLabels = '';
				if (productLabels) {
					let productTemplateLabelsStart = `<div class="item-product__labels">`;
					let productTemplateLabelsEnd = `</div>`;
					let productTemplateLabelsContent = '';
	
					productLabels.forEach(labelItem => {
						productTemplateLabelsContent += `<div class="item-product__label item-product__label_${labelItem.type}">${labelItem.value}</div>`;
					});
	
					productTemplateLabels += productTemplateLabelsStart;
					productTemplateLabels += productTemplateLabelsContent;
					productTemplateLabels += productTemplateLabelsEnd;
				}
	
				let productTemplateImage = `
			<a href="${productUrl}" class="item-product__image _ibg">
				<img src="img/products/${productImage}" alt="${productTitle}">
			</a>
		`;
	
				let productTemplateBodyStart = `<div class="item-product__body">`;
				let productTemplateBodyEnd = `</div>`;
	
				let productTemplateContent = `
			<div class="item-product__content">
				<h3 class="item-product__title">${productTitle}</h3>
				<div class="item-product__text">${productText}</div>
			</div>
		`;
	
				let productTemplatePrices = '';
				let productTemplatePricesStart = `<div class="item-product__prices">`;
				let productTemplatePricesCurrent = `<div class="item-product__price">Rp ${productPrice}</div>`;
				let productTemplatePricesOld = `<div class="item-product__price item-product__price_old">Rp ${productOldPrice}</div>`;
				let productTemplatePricesEnd = `</div>`;
	
				productTemplatePrices = productTemplatePricesStart;
				productTemplatePrices += productTemplatePricesCurrent;
				if (productOldPrice) {
					productTemplatePrices += productTemplatePricesOld;
				}
				productTemplatePrices += productTemplatePricesEnd;
	
				let productTemplateActions = `
			<div class="item-product__actions actions-product">
				<div class="actions-product__body">
					<a href="" class="actions-product__button btn btn_white">Add to cart</a>
					<a href="${productShareUrl}" class="actions-product__link _icon-share">Share</a>
					<a href="${productLikeUrl}" class="actions-product__link _icon-favorite">Like</a>
				</div>
			</div>
		`;
	
				let productTemplateBody = '';
				productTemplateBody += productTemplateBodyStart;
				productTemplateBody += productTemplateContent;
				productTemplateBody += productTemplatePrices;
				productTemplateBody += productTemplateActions;
				productTemplateBody += productTemplateBodyEnd;
	
				let productTemplate = '';
				productTemplate += productTemplateStart;
				productTemplate += productTemplateLabels;
				productTemplate += productTemplateImage;
				productTemplate += productTemplateBody;
				productTemplate += productTemplateEnd;
	
				productsItems.insertAdjacentHTML('beforeend', productTemplate);
	
			});
		}
	}
	
});










