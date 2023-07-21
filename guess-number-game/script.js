const userInput = document.getElementById('input')
const submit = document.getElementById('submit')
const start = document.getElementById('start')
const result = document.getElementById('result')
const display = document.getElementById('display')
const remaining = document.getElementById('remaining')

let previousGuess = [];
let countGuess = 0
let randomGuess;

function onStartGame(){
    result.innerHTML = ''
    display.innerHTML = ''
    countGuess = 0
    remaining.innerHTML = `${10 - countGuess}`
    previousGuess = []
    randomGuess = Math.round(Math.random() * 100 + 1)

    userInput.disabled = false
    submit.disabled = false
    start.disabled = true
    userInput.focus()
}

function onEndGame(message){
    result.innerHTML = message
    userInput.disabled = true
    submit.disabled = true
    start.disabled = false
    remaining.innerHTML = `${10 - countGuess}`
    start.focus()
}

function onInput(e){
    e.preventDefault()
    if(countGuess === 10){
        result.innerHTML = 'You have 0 guesses left'
        userInput.disabled = true
        submit.disabled = true
        start.disabled = false
    }else{
        const guess = userInput.value
        userInput.value= ''
        if(!isNaN(guess) && guess !== ''){
            previousGuess.push(guess)
            display.innerHTML = `${previousGuess.join(', ')}`
            countGuess++
            if(guess > randomGuess){
                result.innerHTML = 'Your guess is too high'
                remaining.innerHTML = `${10 - countGuess}`
            }else if(guess < randomGuess){
                result.innerHTML = 'Your guess is too low'
                remaining.innerHTML = `${10 - countGuess}`
            }else{
                onEndGame("You won! The number was  " + randomGuess)
            }
        }else{
            result.innerHTML = "Please enter a valid number"
        }
    }
}

submit.addEventListener('click', onInput)
start.addEventListener('click', onStartGame)
onStartGame()