const inputEl = document.querySelector('#weightInput');
const outputEl = document.querySelector('.output');
const unitSelectorEl = document.querySelector('.unit-selector');
const placeholderEl = inputEl.placeholder;
const outputValues = document.querySelectorAll('.card-output');
const weightTypeEl = document.querySelector('#weightType');
const gramsOutputEl = document.querySelector('#gramsOutput');
const lbsOutputEl = document.querySelector('#lbsOutput');
const ozOutputEl = document.querySelector('#ozOutput');
const kgOutputEl = document.querySelector('#kgOutput');
const kilogramsEl = document.querySelector('#kilograms');
const gramsEl = document.querySelector('#grams');
const poundsEl = document.querySelector('#lbs');
const ouncesEl = document.querySelector('#oz');

function hideConversions() {
    outputEl.style.visibility = 'hidden';
}

function showConversions() {
    outputEl.style.visibility = 'visible';
}

function changePlaceholder() {
    inputEl.placeholder = `enter ${unitSelectorEl.value}`;
}

const weightOutput = () => {
      let weight = inputEl.value;
        if (inputEl.value === "") {
            hideConversions();
          } else {
            showConversions();
            switch (weightTypeEl.value) {
                    case `kilograms`:
                        gramsOutputEl.innerHTML = `${inputEl.value}kg = ${(weight*1000)}g`; 
                        lbsOutputEl.innerHTML = `${inputEl.value}kg = ${(weight*2.20462).toFixed(3)} lb/s`; 
                        ozOutputEl.innerHTML = `${inputEl.value}kg = ${(weight*35.274).toFixed(3)} oz`; 
                        kgOutputEl.innerHTML = ""; 
                        break;
                    case `grams`:
                        gramsOutputEl.innerHTML = ""; 
                        lbsOutputEl.innerHTML = `${inputEl.value}g = ${(weight*0.00220462).toFixed(3)} lb/s`;
                        ozOutputEl.innerHTML = `${inputEl.value}g = ${(weight*0.035274).toFixed(3)} oz`;
                        kgOutputEl.innerHTML = `${inputEl.value}g = ${(weight*0.001).toFixed(3)}kg`;
                        break;
                    case `pounds`:
                        gramsOutputEl.innerHTML = `${inputEl.value} lb/s = ${(weight*453.592).toFixed(3)}g`; 
                        lbsOutputEl.innerHTML = "";
                        ozOutputEl.innerHTML = `${inputEl.value} lb/s = ${(weight*16).toFixed(3)} oz`;
                        kgOutputEl.innerHTML = `${inputEl.value} lb/s = ${(weight*0.453592).toFixed(3)}kg`;
                        break;
                    case `ounces`:
                        gramsOutputEl.innerHTML = `${inputEl.value} oz = ${(weight*28.3495).toFixed(3)}g`; 
                        lbsOutputEl.innerHTML = `${inputEl.value} oz = ${(weight*0.0625).toFixed(3)} lb/s`;
                        ozOutputEl.innerHTML = ``;
                        kgOutputEl.innerHTML = `${inputEl.value} oz = ${(weight*0.0283495).toFixed(3)}kg`;
                        break;
                    }
                }
  }; 

window.onload = hideConversions();
unitSelectorEl.addEventListener('change', changePlaceholder);
weightTypeEl.addEventListener('click', weightOutput);
inputEl.addEventListener('input', weightOutput);




