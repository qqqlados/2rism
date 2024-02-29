const menuBtn = document.querySelector('.header__menu-btn')
const menu = document.querySelector('.header__menu-list')
const body = document.querySelector('body')
const modal_window = document.querySelector('#modal_window')
let accordeon = document.querySelectorAll('.accordeon')
let footerContent = document.querySelectorAll('.content')
let header = document.querySelector('.header__top')
let accordionItem = document.querySelectorAll('.accordion')
let accordionContent = document.querySelectorAll('.accordion__content')

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('active')
	menuBtn.classList.toggle('active')
	body.classList.toggle('lock')
})

document.querySelectorAll('.accordion__item-trigger').forEach(item => {
	item.addEventListener('click', () => {
		const parent = item.parentNode

		if (parent.classList.contains('accordion__item--active')) {
			parent.classList.remove('accordion__item--active')
		} else {
			document
				.querySelectorAll('.accordion__item')
				.forEach(child => child.classList.remove('accordion__item--active'))

			parent.classList.add('accordion__item--active')
		}
	})
})

window.onscroll = function () {
	scrollFunction()
}

function scrollFunction() {
	let scrollPos = 200

	if (
		document.body.scrollTop > scrollPos ||
		document.documentElement.scrollTop > scrollPos
	) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
}

modal_window.addEventListener('click', () => {
	menu.classList.add('active')
})
