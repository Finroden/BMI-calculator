window.onload = () => {
    let button = document.querySelector('#button');
    button.addEventListener('click', calculateBMI);
};

function calculateBMI() {
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = 'Provide a valid height!';
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = 'Provide a valid weight!';
    } else {
        let bmi = weight / ((height / 100) ** 2);
        bmi = bmi.toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = `Underweight : <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span>`;
        } else {
            result.innerHTML = `Overweight : <span>${bmi}</span>`;
        }
    }
}
