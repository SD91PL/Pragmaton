document.addEventListener('DOMContentLoaded', function () {
	// lazy-loading offscreen and hidden images
	const images = document.querySelectorAll('img[data-src]')
	const options = {
		rootMargin: '0px',
		threshold: 0.1,
	}
	const observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target
				img.src = img.dataset.src
				observer.unobserve(img)
			}
		})
	}, options)
	images.forEach(image => {
		observer.observe(image)
	})

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
		sOne.classList.remove('z-30')
		sOne.classList.remove('focus-in')
		sOne.classList.remove('blur-out')
		sTwo.classList.add('blur-out')
		sThree.classList.add('blur-out')
		setTimeout(() => {
			sTwo.classList.remove('z-30')
			sTwo.classList.remove('opacity-100')
			sThree.classList.remove('z-30')
			sThree.classList.remove('opacity-100')
			sTwo.classList.add('z-20')
			sTwo.classList.add('opacity-0')
			sThree.classList.add('z-20')
			sThree.classList.add('opacity-0')
		}, 900)
		sOne.classList.add('focus-in')
		sOne.classList.remove('z-20')
		sOne.classList.remove('opacity-0')
		sOne.classList.add('z-30')
		sOne.classList.add('opacity-100')
	}
	const showTwo = () => {
		sTwo.classList.remove('z-30')
		sTwo.classList.remove('focus-in')
		sTwo.classList.remove('blur-out')
		sOne.classList.add('blur-out')
		sThree.classList.add('blur-out')
		setTimeout(() => {
			sOne.classList.remove('z-30')
			sOne.classList.remove('opacity-100')
			sThree.classList.remove('z-30')
			sThree.classList.remove('opacity-100')
			sOne.classList.add('z-20')
			sOne.classList.add('opacity-0')
			sThree.classList.add('z-20')
			sThree.classList.add('opacity-0')
		}, 900)
		sTwo.classList.add('focus-in')
		sTwo.classList.remove('z-20')
		sTwo.classList.remove('opacity-0')
		sTwo.classList.add('z-30')
		sTwo.classList.add('opacity-100')
	}
	const showThree = () => {
		sThree.classList.remove('z-30')
		sThree.classList.remove('focus-in')
		sThree.classList.remove('blur-out')
		sOne.classList.add('blur-out')
		sTwo.classList.add('blur-out')
		setTimeout(() => {
			sOne.classList.remove('z-30')
			sOne.classList.remove('opacity-100')
			sTwo.classList.remove('z-30')
			sTwo.classList.remove('opacity-100')
			sOne.classList.add('z-20')
			sOne.classList.add('opacity-0')
			sTwo.classList.add('z-20')
			sTwo.classList.add('opacity-0')
		}, 900)
		sThree.classList.add('focus-in')
		sThree.classList.remove('z-20')
		sThree.classList.remove('opacity-0')
		sThree.classList.add('z-30')
		sThree.classList.add('opacity-100')
	}

	nOne.addEventListener('click', showOne)
	nTwo.addEventListener('click', showTwo)
	nThree.addEventListener('click', showThree)
})
