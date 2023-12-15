document.addEventListener('DOMContentLoaded', function () {
	// Home
	const home = document.querySelector('.home')
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

	// Nav - Main Sections - Blur Animation
	const sOne = document.querySelector('.s-one')
	const sTwo = document.querySelector('.s-two')
	const sThree = document.querySelector('.s-three')
	const nOne = document.querySelector('.n-one')
	const nTwo = document.querySelector('.n-two')
	const nThree = document.querySelector('.n-three')

	const showOne = () => {
		sOne.classList.remove('focus-in')
		sOne.classList.remove('blur-out')
		sTwo.classList.add('blur-out')
		sThree.classList.add('blur-out')
		setTimeout(() => {
			sTwo.classList.add('hidden')
			sThree.classList.add('hidden')
		}, 900)
		sOne.classList.add('focus-in')
		sOne.classList.remove('hidden')
	}
	const showTwo = () => {
		sTwo.classList.remove('focus-in')
		sTwo.classList.remove('blur-out')
		sOne.classList.add('blur-out')
		sThree.classList.add('blur-out')
		setTimeout(() => {
			sOne.classList.add('hidden')
			sThree.classList.add('hidden')
		}, 900)
		sTwo.classList.add('focus-in')
		sTwo.classList.remove('hidden')
	}
	const showThree = () => {
		sThree.classList.remove('focus-in')
		sThree.classList.remove('blur-out')
		sOne.classList.add('blur-out')
		sTwo.classList.add('blur-out')
		setTimeout(() => {
			sOne.classList.add('hidden')
			sTwo.classList.add('hidden')
		}, 900)
		sThree.classList.add('focus-in')
		sThree.classList.remove('hidden')
	}

	nOne.addEventListener('click', showOne)
	nTwo.addEventListener('click', showTwo)
	nThree.addEventListener('click', showThree)
})
