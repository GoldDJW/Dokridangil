const correctAnswers = ['31', '빨간'];

function checkAnswer() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const resultElement = document.getElementById('result');
    const popup = document.getElementById('popup');

    if (input1 === correctAnswers[0] && input2 === correctAnswers[1]) {
        resultElement.textContent = "정답";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "오답";
        resultElement.style.color = "red";
    }

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    resetForm();
}

function resetForm() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
}