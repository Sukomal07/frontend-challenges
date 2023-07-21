const result = document.querySelector('.result')
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const changeBy = document.getElementById('changeBy')
const reset = document.getElementById('reset')

let counter = 0

increment.addEventListener('click', function(){
    counter += changeBy.valueAsNumber
    result.innerHTML = counter
})
decrement.addEventListener('click' ,()=>{
    counter -= changeBy.valueAsNumber
    result.innerHTML = counter
})

reset.addEventListener('click' ,()=>{
    counter = 0
    result.innerHTML = counter
})