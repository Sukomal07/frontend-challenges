const progress = document.getElementById('progress')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let intervalId
let width = 0
stop.disabled = true
function onStart() {
    start.disabled = true
    stop.disabled = false
    reset.disabled = true

    intervalId = setInterval(() => {
        if (width < 100) {
            width += 0.1
            progress.style.width = `${width}%`
        } else {
            clearInterval(intervalId)
            stopProgress()
        }
    }, 20);
}

function stopProgress() {
    clearInterval(intervalId)
    start.disabled = false
    reset.disabled = false
}

function resetProgress() {
    clearInterval(intervalId);
    width = 0;
    progress.style.width = '0%';
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
}

start.addEventListener('click', onStart)
stop.addEventListener('click', stopProgress)
reset.addEventListener('click', resetProgress)
