

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.general-header__menu-icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})