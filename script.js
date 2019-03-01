// output is hidden by default
document.getElementById('output').style.visibility = 'hidden';

//DECLARE VARIABLES
//weight input
const input = document.querySelector("#weightInput");
// conversion output
const output = document.querySelector("#output");
// placeholder 
const placeholder = input.placeholder;
// select field
const weightType = document.querySelector("#weightType")
// output - grams 
const gramsOutput = document.querySelector("#gramsOutput");
// output - pounds
const lbsOutput = document.querySelector("#lbsOutput");
// output - ounces
const ozOutput = document.querySelector("#ozOutput");
// output - kilograms
const kgOutput = document.querySelector("#kgOutput");
// select field - kilograms
const kilograms = document.querySelector("#kilograms");
// select field - grams
const grams = document.querySelector("#grams");
// select field - lbs
const pounds = document.querySelector("#lbs")
// select field - oz
const ounces = document.querySelector("#oz")



// change placeholder text
// const changePlaceholder = () => {
//     if (weightType.value === "Kilograms") {
//      input.placeholder = "enter kilograms..."
//     } else 
//         if (weightType.value === "Grams") {
//             input.placeholder = "enter grams..."
//         } else 
//             if (weightType.value === "Pounds") {
//                 input.placeholder = "enter lbs..."
//             } else 
//                 if (weightType.value === "Ounces") {
//                     input.placeholder = "enter oz..."
//     }
// };

const changePlaceholder = () => {
    switch (weightType.value) {
        case `Kilograms`:
            input.placeholder = "enter kilograms...";
            break;
        case `Grams`:
            input.placeholder = `enter grams...`;
            break;
        case `Pounds`:
            input.placeholder = "enter lbs...";
            break;
        case `Ounces`:
            input.placeholder = "enter oz...";
            break;
        default:
            input.placeholder = `enter kg...`;
    }
};

const calculate = (e) => {
    let weight = e.target.value;
    if (input.value === "") {
        output.style.visibility = 'hidden';
    } else 
        if (weightType.value === "Kilograms") {
            output.style.visibility = 'visible';
            gramsOutput.innerHTML = weight*1000; 
            lbsOutput.innerHTML = weight*2.20462;
            ozOutput.innerHTML = weight*35.274;
            kgOutput.innerHTML = " ";
            return;
            } else 
                if (weightType.value === "Grams") {
                    output.style.visibility = 'visible';
                    gramsOutput.innerHTML = " "; 
                    lbsOutput.innerHTML = weight*0.00220462;
                    ozOutput.innerHTML = weight*0.035274;
                    kgOutput.innerHTML = weight*0.001;
                    return; 
                    } else 
                        if (weightType.value === "Pounds") {
                            output.style.visibility = 'visible';
                            gramsOutput.innerHTML = weight*453.592; 
                            lbsOutput.innerHTML = " ";
                            ozOutput.innerHTML = weight*16;
                            kgOutput.innerHTML = weight*0.453592;
                            return; 
                            } else 
                                if (weightType.value === "Ounces") {
                                    output.style.visibility = 'visible';
                                    gramsOutput.innerHTML = weight*28.3495; 
                                    lbsOutput.innerHTML = weight*0.0625;
                                    ozOutput.innerHTML =  " ";
                                    kgOutput.innerHTML = weight*0.0283495;
                                    return;
                                }
};

// EVENT LISTENERS
// change placeholder text
weightType.addEventListener('change', changePlaceholder);
// show weight output
input.addEventListener('input', calculate);
// change output if weight unit is changed and input is NOT empty


