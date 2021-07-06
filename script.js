const text = document.querySelector('.text')
const secretDiv = document.querySelector('.secret-div')

const keys = []
const secretCode = ['h', 'a', 'c', 'k']

const confettiSettings = { target: 'my-canvas', size: 1.4, max: 150 }
const confetti =  new ConfettiGenerator(confettiSettings)

function keysDetector(e) {
  keys.push(e.key)
  console.log('key entered: ' + e.key + ' keys array: ' + keys)

  if (keys.length > secretCode.length) {
    keys.shift()
  }

  if (JSON.stringify(keys) === JSON.stringify(secretCode)) {
    console.log('Yessss!')

    secretDiv.style.display = 'block'
    text.innerHTML = 'Identity Verified!'
    confetti.render()

    anime({
      targets: 'body',
      rotate: '1turn',
      backgroundColor: '#fcba03',
      duration: 2000,
    })
  }
}

window.addEventListener('keyup', keysDetector)