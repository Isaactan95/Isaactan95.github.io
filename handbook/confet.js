import JSConfetti from 'js-confetti'


const canvas = document.getElementById('myCanvas')

const jsConfetti = new JSConfetti({ canvas })

jsConfetti.addConfetti({
	confettiColors: [
	  '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
	],
  })
jsConfetti.addConfetti()