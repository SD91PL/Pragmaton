const liteYT = document.querySelector('lite-youtube')
const titles = ['Teraz albo nigdy', 'Wniosek']
const videos = ['Czp8-Q1Ylco', 'QAUWpVuOZ4s']

const generateVideoID = () => {
	const randomIndex = Math.floor(Math.random() * (titles.length - 0.0001))
	liteYT.setAttribute('videotitle', 'PRAGMATON - ' + titles[randomIndex] + ' (Official Video)')
	liteYT.setAttribute('videoid', videos[randomIndex])
}

window.addEventListener('load', generateVideoID)