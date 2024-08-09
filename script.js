const questions = [
    { answers: ['23', '8', '6'] }, // 첫 번째 질문: 이봉창이 던진 폭탄
    { answers: ['31', '빨간'] },   // 두 번째 질문: 유관순 일기
    { answers: ['1216'] },          // 세 번째 질문: 옷 주머니에 소지품 확인
    { answers: ['하얼빈의거'] },  // 네 번째 질문: 안중근 의사의 사건
    { answers: ['0902'] }          // 다섯 번째 질문: 비밀상자
];

const hints = [
    "힌트: (첫번째 칸은 숫자 2자리.)", // 첫 번째 질문 힌트
    "힌트: (밀랍인형을 자르면...)",      // 두 번째 질문 힌트
    "힌트: (숫자 4자리)",  // 세 번째 질문 힌트
    "힌트: (안중근 의사의 사형선고를 받은 달은 2월 이었다.)", // 네 번째 질문 힌트
    "힌트: (총과 태극기를 다시 확인해 보세요)"     // 다섯 번째 질문 힌트
];

let currentQuestion = 1;

function checkAnswer(questionNumber) {
    const inputs = document.querySelectorAll(`#question${questionNumber} .answer-input`);
    const resultElement = document.getElementById('result');
    const hintElement = document.getElementById('hint');
    const popup = document.getElementById('popup');

    let isCorrect = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== questions[questionNumber - 1].answers[i]) {
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
        hintElement.textContent = hints[questionNumber - 1];
    }

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    const resultText = document.getElementById('result').textContent;

    if (resultText === "정답") {
        if (currentQuestion < 5) {
            document.getElementById(`question${currentQuestion}`).style.display = 'none';
            currentQuestion++;
            document.getElementById(`question${currentQuestion}`).style.display = 'block';
        } else {
            // 모든 질문 완료 시 선택 팝업을 표시
            showSelectionPopup();
        }
    }

    resetForm();
}

function showSelectionPopup() {
    const selectionPopup = document.getElementById('selection-popup');
    selectionPopup.style.display = 'block';
}

function goToQuestion(questionNumber) {
    const selectionPopup = document.getElementById('selection-popup');
    selectionPopup.style.display = 'none';

    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    currentQuestion = questionNumber;
    document.getElementById(`question${currentQuestion}`).style.display = 'block';
}

function resetForm() {
    for (let i = 1; i <= 5; i++) {
        const inputs = document.querySelectorAll(`#question${i} .answer-input`);
        inputs.forEach(input => input.value = '');
    }
    document.getElementById('hint').textContent = '';
}
