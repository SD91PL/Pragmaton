const liteYT = document.querySelector('lite-youtube')
const titles = ['Jestem', 'Teraz albo nigdy', 'Wniosek']
const videos = ['Stx494d7xYE','Czp8-Q1Ylco', 'QAUWpVuOZ4s']

const generateVideoID = () => {
	const randomIndex = Math.floor(Math.random() * (titles.length - 0.0001))
	liteYT.setAttribute('videotitle', 'PRAGMATON - ' + titles[randomIndex] + ' (Official Video)')
	liteYT.setAttribute('videoid', videos[randomIndex])
}

window.addEventListener('load', generateVideoID)