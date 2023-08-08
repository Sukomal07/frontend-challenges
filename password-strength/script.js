const input = document.getElementById('input')
const lowercase = document.getElementById('lc')
const uppercase = document.getElementById('uc')
const number = document.getElementById('num')
const symbol = document.getElementById('sym')
const progressbar = document.getElementById('progressbar')
const character = document.getElementById('chars')
const strengthEl = document.getElementById('strength')

const passwordStrengths = [
    { difficulty: 'weak', color: 'red' },
    { difficulty: 'medium', color: 'orange' },
    { difficulty: 'strong', color: 'green' }
]

const hasNumber = /\d/
const hasLowercase = /[a-z]/
const hasUppercase = /[A-Z]/
const hasSymbol = /[^A-Za-z0-9]/

function getPasswordStrength(strength) {
    if (strength > 8) {
        return passwordStrengths[2]
    }
    if (strength > 5) {
        return passwordStrengths[1]
    }
    return passwordStrengths[0]
}

function getPasswordScore(text) {
    let score = 0
    if (text.length > 3) {
        score = Math.min(6, Math.floor(text.length / 3));
        score += hasLowercase.test(text) + hasUppercase.test(text) + hasNumber.test(text) + hasSymbol.test(text)
    }
    return score
}

function updateUi(strength, score, length) {
    strengthEl.textContent = strength.difficulty
    input.style.borderColor = strength.color
    progressbar.style.backgroundColor = strength.color
    progressbar.style.width = score * 10 + '%'
    character.textContent = length
}

input.addEventListener('input', () => {
    const password = input.value;
    if (password !== '') {
        const passwordScore = getPasswordScore(password);
        const strength = getPasswordStrength(passwordScore);

        lowercase.classList.toggle('true', hasLowercase.test(password));
        uppercase.classList.toggle('true', hasUppercase.test(password));
        number.classList.toggle('true', hasNumber.test(password));
        symbol.classList.toggle('true', hasSymbol.test(password));

        updateUi(strength, passwordScore, password.length);
    } else {
        lowercase.classList.remove('true');
        uppercase.classList.remove('true');
        number.classList.remove('true');
        symbol.classList.remove('true');
        updateUi(passwordStrengths[0], 0, 0);
    }
});
