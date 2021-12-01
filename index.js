const nameInput = document.getElementById('name');

const weightInput = document.getElementById('weight');
const weightRange = document.getElementById('weight_range');

const heightInput = document.getElementById('height');
const heightRange = document.getElementById('height_range');

const bmi_result = document.getElementById('bmi-result');
const bmi_class = document.getElementById('bmi-class');

var [bmi, weight, height] = [0, 0, 0];

weightInput.addEventListener('input', () => {
    weight = weightInput.value;

    bmiChange();
});

weightRange.addEventListener('input', () => {
    weightInput.value = weightRange.value;

    weight = weightRange.value;

    bmiChange();
});

heightInput.addEventListener('input', () => {
    height = heightInput.value / 100;

    bmiChange();
});

heightRange.addEventListener('input', () => {
    heightInput.value = heightRange.value;

    height = heightRange.value / 100;

    bmiChange();
});

function bmiChange() {
    bmi = weight / (height * height);

    if (!isNaN(bmi) && isFinite(bmi)) {
        bmi_result.innerHTML = bmi.toFixed(2);
        bmiClass(bmi.toFixed(2))
    }
}

function bmiClass(param) {
    if(param < 18.5){
        bmi_class.innerHTML = 'Abaixo do Peso'
    }
    else if(param <= 24.9){
        bmi_class.style.display = 'flex';
        bmi_class.innerHTML = 'Peso Normal'
    }
    else if(param <= 29.9){
        bmi_class.style.display = 'flex';
        bmi_class.innerHTML = 'Sobrepeso'
    }
    else if(param <= 34.9){
        bmi_class.style.display = 'flex';
        bmi_class.innerHTML = 'Obesidade Grau I'
    }
    else if(param <= 39.9){
        bmi_class.style.display = 'flex';
        bmi_class.innerHTML = 'Obesidade Grau II'
    }
    else{
        bmi_class.style.display = 'flex';
        bmi_class.innerHTML = 'Obesidade Grau III'
    }
}