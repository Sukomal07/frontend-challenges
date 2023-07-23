const horizontalPositionEl = document.getElementById('horizontal-position')
const verticalPositionEl = document.getElementById('vartical-position')
const type = document.getElementById('type')
const message = document.getElementById('message')
const duration = document.getElementById('duration')
const showToastButton = document.getElementById('show-toast')

const leftTop = document.querySelector('.left-top')
const leftDown = document.querySelector('.left-down')
const rightTop = document.querySelector('.right-top')
const rightDown = document.querySelector('.right-down')

const toastTemplate = document.getElementById('toast-template')

message.addEventListener('input', handleShowToast)
showToastButton.addEventListener('click', displayToast)

function handleShowToast() {
    showToastButton.disabled = message.value.length === 0
}

function displayToast() {
    const toastMessage = message.value
    const toastType = type.value
    const horizontalPosition = horizontalPositionEl.value
    const verticalPosition = verticalPositionEl.value
    const toastDuration = duration.value * 1000

    showToast(toastMessage, toastType, toastDuration, horizontalPosition, verticalPosition)
}

function showToast(toastMessage, toastType, toastDuration, horizontalPosition, verticalPosition) {
    if (horizontalPosition === 'left') {
        if (verticalPosition === 'top') {
            leftTop.prepend(createToast(toastMessage, toastType, toastDuration, horizontalPosition))
        } else {
            leftDown.prepend(createToast(toastMessage, toastType, toastDuration, horizontalPosition))
        }
    } else {
        if (verticalPosition === 'top') {
            rightTop.prepend(createToast(toastMessage, toastType, toastDuration, horizontalPosition))
        } else {
            rightDown.prepend(createToast(toastMessage, toastType, toastDuration, horizontalPosition))
        }
    }
}

function createToast(toastMessage, toastType, toastDuration, horizontalPosition) {
    const toast = toastTemplate.content.cloneNode(true)
    toast.querySelector('.toast-message').textContent = toastMessage
    toast.querySelector('.toast').classList.add(toastType)
    toast.querySelector('.remove').addEventListener('click', removeToast)
    const toastEl = toast.querySelector('.toast')

    setTimeout(removeToast, toastDuration)

    async function removeToast() {
        toastEl.classList.add(horizontalPosition === 'left' ? 'fade-out-left' : 'fade-out-right')
        await new Promise(resolve => setTimeout(resolve, 100))
        toastEl.remove()
    }
    return toast
}
