const questions = [
    { answers: ['31', '빨간'] },
    { answers: ['하얼빈의거'] }
];

const hints = [
    "힌트: (빨간색 치마를 입고 이화학당에 모여 태극기를 흔들었다)",
    "힌트: (안중근 의사의 사형선고를 받은 달은 2월 이었다.)"
];

let currentQuestion = 1;

function checkAnswer(questionNumber) {
    const inputs = document.querySelectorAll(`#question${questionNumber} .answer-input`);
    const resultElement = document.getElementById('result');
    const popup = document.getElementById('popup');
    const hintElement = document.getElementById(`hint${questionNumber}`);

    let isCorrect = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== questions[questionNumber-1].answers[i]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        resultElement.textContent = "정답";
        resultElement.style.color = "green";
        hintElement.textContent = "";
    } else {
        resultElement.textContent = "오답";
        resultElement.style.color = "red";
        hintElement.textContent = hints[questionNumber-1];
    }

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    if (currentQuestion === 1) {
        if (document.getElementById('result').textContent === "정답") {
            document.getElementById('question1').style.display = 'none';
            document.getElementById('question2').style.display = 'block';
            currentQuestion = 2;
        }
    } else {
        document.getElementById('question2').style.display = 'none';
        document.getElementById('question1').style.display = 'block';
        currentQuestion = 1;
    }

    resetForm();
}

function resetForm() {
    document.getElementById('input1-1').value = '';
    document.getElementById('input1-2').value = '';
    document.getElementById('input2-1').value = '';
    document.getElementById('hint1').textContent = '';
    document.getElementById('hint2').textContent = '';
}