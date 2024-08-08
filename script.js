const correctAnswers = ['31', '빨간'];

function checkAnswer() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const resultElement = document.getElementById('result');
    const okButton = document.getElementById('okButton');

    if (input1 === correctAnswers[0] && input2 === correctAnswers[1]) {
        resultElement.textContent = "정답";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "오답";
        resultElement.style.color = "red";
    }

    okButton.style.display = 'inline-block';
}

function resetForm() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('okButton').style.display = 'none';
}