const button = document.getElementById('generate-meme')
const memeTitle = document.getElementById('title')
const image = document.getElementById('meme-img')
const memeAuthor = document.getElementById('author')
const loadingMessage = document.getElementById('loading-message')
const error = document.getElementById('error-message')

const fetchData = (url , title , author) =>{
    loadingMessage.style.display = "none"
    error.style.display = "none"
    image.setAttribute('src', url)
    memeTitle.innerText = title
    memeAuthor.innerText = ` meme by : ${author}`
}

const generateMeme = () =>{
    loadingMessage.style.display = "block"
    memeTitle.innerText = ''
    memeAuthor.innerText = ''
    image.removeAttribute('src')
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) =>{
        fetchData(data.url, data.title, data.author)
    })
    .catch((err) =>{
        loadingMessage.style.display = "none"
        error.style.display = "block"
        error.innerText = err.message
    })
}

button.addEventListener('click', generateMeme)
generateMeme()