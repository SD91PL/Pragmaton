const liteYT = document.querySelector('lite-youtube')
const titles = ['Droga bez końca', 'Teraz albo nigdy', 'Nie daj sobie wmówić', 'Wniosek']
const videos = ['poqNiFlH5qk', 'Czp8-Q1Ylco', 'lwir6tJ6TjM', 'QAUWpVuOZ4s']

const generateVideoID = () => {
	const randomIndex = Math.floor(Math.random() * (titles.length - 0.0001))
	liteYT.setAttribute('videotitle', 'PRAGMATON - ' + titles[randomIndex] + ' (Official Video)')
	liteYT.setAttribute('videoid', videos[randomIndex])
}

window.addEventListener('load', generateVideoID)

// drop to main branch
// minify
// drop to dist