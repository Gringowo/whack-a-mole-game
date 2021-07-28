const squares = document.querySelectorAll('.square')
const pai = document.querySelector('.pai')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('pai')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9 )]
    randomSquare.classList.add('pai')


    //assing the id of the randomPosition to hit position
    hitPosition = randomSquare.id


}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function movePai(){
    timerId = setInterval(randomSquare, 500)
}

movePai()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime


    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! You defeated '+ result + ' Douchbag´s')
    }
}


let countDownTimerId = setInterval(countDown, 1000)

