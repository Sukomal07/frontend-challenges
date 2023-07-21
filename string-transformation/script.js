const input = document.getElementById('input')
const lowercase = document.getElementById('lowercase')
const uppercase = document.getElementById('uppercase')
const camelcase = document.getElementById('camelcase')
const pascalcase = document.getElementById('pascalcase')
const snakecase = document.getElementById('snakecase')
const kababcase = document.getElementById('kababcase')
const trim = document.getElementById('trim')

function transform({text = input.value.trim()}){
    const camel = text.toLowerCase().split(' ').reduce((a,b) => a + b[0]?.toUpperCase() + b.substring(1).toLowerCase())
    lowercase.innerHTML = text.toLowerCase()
    uppercase.innerHTML = text.toUpperCase()
    camelcase.innerHTML = camel
    pascalcase.innerHTML = camel ? camel[0]?.toUpperCase() + camel.substring(1) : ''
    snakecase.innerHTML = text.split(' ').join('_')
    kababcase.innerHTML = text.split(' ').join('-')
    trim.innerHTML = text.split(' ').join('')
}
input.addEventListener('input', transform)
transform({})