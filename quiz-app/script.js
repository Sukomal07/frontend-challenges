const correctAlert = document.getElementById('correct-alert')
const wrongAlert = document.getElementById('wrong-alert')
const question = document.getElementById('question')
const label1 = document.getElementById('choice-1')
const label2 = document.getElementById('choice-2')
const label3 = document.getElementById('choice-3')
const label4 = document.getElementById('choice-4')
const submitBtn = document.getElementById('submit')
const inputs = document.querySelectorAll('input[name="choices"]')
const loading = document.querySelector('.loading')
const quizContainer = document.querySelector('.quiz-container')

let currentQuestion = null;
submitBtn.disabled = true
async function fetchQuiz() {
    try {
        quizContainer.style.display = 'none'
        loading.style.display = "block"
        const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple')
        const data = await response.json()
        currentQuestion = data.results[0]
        question.textContent = currentQuestion.question
        const choices = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        choices.sort(() => Math.random() - 0.5)
        label1.textContent = choices[0]
        label2.textContent = choices[1]
        label3.textContent = choices[2]
        label4.textContent = choices[3]
        quizContainer.style.display = 'block'
        loading.style.display = "none"
    } catch (error) {
        console.log("Error fatching quiz data", error);
        loading.style.display = "block"
        quizContainer.style.display = 'none'
    }
}

function checkAnswer() {
    const selectChoice = document.querySelector('input[name="choices"]:checked')
    if (!selectChoice) {
        return
    }
    const selectedAnswer = selectChoice.nextElementSibling.textContent
    const correctAns = currentQuestion.correct_answer
    if (selectedAnswer === correctAns) {
        correctAlert.style.display = "block"
        wrongAlert.style.display = "none"
        fetchQuiz()
        selectChoice.checked = false
        submitBtn.disabled = true
    } else {
        wrongAlert.style.display = "block"
        correctAlert.style.display = "none"
        setTimeout(() => {
            wrongAlert.style.display = "none";
        }, 2000);
    }
}
submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    checkAnswer()
})
inputs.forEach(btn => btn.addEventListener('change', function () {
    submitBtn.disabled = false
}))
fetchQuiz()