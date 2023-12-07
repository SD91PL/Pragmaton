document.addEventListener('DOMContentLoaded', function () {
	const home = document.querySelector('.home')
	const homeLogo = document.querySelector('.home__logo')
	const unHome = document.querySelector('.under-home')
	const startBtn = document.querySelector('.start-btn')

	const hideHome = () => {
		unHome.classList.add('hidden')
		home.classList.add('blur-out')
		setTimeout(() => {
			home.classList.add('hidden')
		}, 900)
	}

	startBtn.addEventListener('click', hideHome)
})
