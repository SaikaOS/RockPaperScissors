let playerScore = document.querySelector('.pscore')
let computerScore = document.querySelector('.cscore')
let title = document.querySelector('.title')
let imgPlayer = document.querySelector('.playerImg')
let imgPC = document.querySelector('.pcImg')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const btns = document.querySelectorAll('.btns button')
const mode = document.querySelector('.mode')

const sides = ['rock', 'paper', 'scissors']
let playerSc = 0
let computerSc = 0

imgPlayer.classList.add('rotate')

function pcSide() {
    let getRandom = Math.floor(Math.random() * (sides.length))
    let side = sides[getRandom] 
    imgPC.src = './img/' + side + '.png'
    return side
}

function playerSide() {
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            imgPlayer.src = './img/' + btn.textContent + '.png'
            pcSide()
            imgPlayer.classList.add('anime')
            imgPC.classList.add('anime')
            compare(btn.textContent,pcSide())
        })
    })
}

function compare(p, c) {
    if(p == c) {
        title.textContent = 'It is a tie'
        return
    }

    if(p == 'rock') {
        if(c == 'scissors') {
            title.textContent = 'Player Wins'
            playerSc++
            playerScore.textContent = playerSc
            return
        } else {
            title.textContent = 'Computer Wins'
            computerSc++
            computerScore.textContent = computerSc
            return
        }
    }

    if(p == 'paper') {
        if(c == 'scissors') {
            title.textContent = 'Computer Wins'
            computerSc++
            computerScore.textContent = computerSc
            return
        } else {
            title.textContent = 'Player Wins'
            playerSc++
            playerScore.textContent = playerSc
            return
        }
    }

    if(p == 'scissors') {
        if(c == 'rock') {
            title.textContent = 'Computer Wins'
            computerSc++
            computerScore.textContent = computerSc
            return
        } else {
            title.textContent = 'Player Wins'
            playerSc++
            playerScore.textContent = playerSc
            return
        }
    }
}

mode.addEventListener('click', () => {
    document.body.classList.toggle('darkWhite')
})

playerSide()