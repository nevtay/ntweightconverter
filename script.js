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

// second version of function for swapping placeholder text
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
            input.placeholder = "enter kg...";
    }
};

// third version of conversion function - used switch for tidier code
const calculateTwo = () => {
      let weight = input.value;
        if (input.value === "") {
              output.style.visibility = 'hidden';
          } else
            switch (weightType.value) {
                    case `Kilograms`:
                        output.style.visibility = 'visible';
                        gramsOutput.innerHTML = weight*1000; 
                        lbsOutput.innerHTML = weight*2.20462;
                        ozOutput.innerHTML = weight*35.274;
                        kgOutput.innerHTML = weight*1;
                        break;
                    case `Grams`:
                        output.style.visibility = 'visible';
                        gramsOutput.innerHTML = weight*1; 
                        lbsOutput.innerHTML = weight*0.00220462;
                        ozOutput.innerHTML = weight*0.035274;
                        kgOutput.innerHTML = weight*0.001;
                        break;
                    case `Pounds`:
                        output.style.visibility = 'visible';
                        gramsOutput.innerHTML = weight*453.592; 
                        lbsOutput.innerHTML = weight*1;
                        ozOutput.innerHTML = weight*16;
                        kgOutput.innerHTML = weight*0.453592;
                        break;
                    case `Ounces`:
                        output.style.visibility = 'visible';
                        gramsOutput.innerHTML = weight*28.3495; 
                        lbsOutput.innerHTML = weight*0.0625;
                        ozOutput.innerHTML =  weight*1;
                        kgOutput.innerHTML = weight*0.0283495;
                        break;
                    default:
                        return;
                    }
  };
// 

// EVENT LISTENERS \\
// change placeholder text
weightType.addEventListener('change', changePlaceholder);
// conversions
weightType.addEventListener('click', calculateTwo);
// show weight output
input.addEventListener('input', calculateTwo);





// OLD CODE \\

// first version swapping placeholder function
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


// first version of conversion function  - declaring weight variable as "e.target.value" causes output to display NaN when weight unit changes.
// const calculate = (e) => {
//     let weight = e.target.value;
//     if (input.value === "") {
//         output.style.visibility = 'hidden';
//     } else 
//         if (weightType.value === "Kilograms") {
//             output.style.visibility = 'visible';
//             gramsOutput.innerHTML = weight*1000; 
//             lbsOutput.innerHTML = weight*2.20462;
//             ozOutput.innerHTML = weight*35.274;
//             kgOutput.innerHTML = " ";
//             event.stopPropagation();
//             } else 
//                 if (weightType.value === "Grams") {
//                     output.style.visibility = 'visible';
//                     gramsOutput.innerHTML = " "; 
//                     lbsOutput.innerHTML = weight*0.00220462;
//                     ozOutput.innerHTML = weight*0.035274;
//                     kgOutput.innerHTML = weight*0.001;
//                     event.stopPropagation(); 
//                     } else 
//                         if (weightType.value === "Pounds") {
//                             output.style.visibility = 'visible';
//                             gramsOutput.innerHTML = weight*453.592; 
//                             lbsOutput.innerHTML = " ";
//                             ozOutput.innerHTML = weight*16;
//                             kgOutput.innerHTML = weight*0.453592;
//                             event.stopPropagation(); 
//                             } else 
//                                 if (weightType.value === "Ounces") {
//                                     output.style.visibility = 'visible';
//                                     gramsOutput.innerHTML = weight*28.3495; 
//                                     lbsOutput.innerHTML = weight*0.0625;
//                                     ozOutput.innerHTML =  " ";
//                                     kgOutput.innerHTML = weight*0.0283495;
//                                     event.stopPropagation();
//                                 }
// };

// second version of calculation function; fixes NaN output issue
// const calculateTwo = () => {
//       let weight = input.value;
//         if (input.value === "") {
//               output.style.visibility = 'hidden';
//           } else
//             if (weightType.value === "Kilograms") {
//                       output.style.visibility = 'visible';
//                       gramsOutput.innerHTML = weight*1000; 
//                       lbsOutput.innerHTML = weight*2.20462;
//                       ozOutput.innerHTML = weight*35.274;
//                       kgOutput.innerHTML = weight*1;
//                       } else 
//                           if (weightType.value === "Grams") {
//                               output.style.visibility = 'visible';
//                               gramsOutput.innerHTML = weight*1; 
//                               lbsOutput.innerHTML = weight*0.00220462;
//                               ozOutput.innerHTML = weight*0.035274;
//                               kgOutput.innerHTML = weight*0.001;
//                               } else 
//                                   if (weightType.value === "Pounds") {
//                                       output.style.visibility = 'visible';
//                                       gramsOutput.innerHTML = weight*453.592; 
//                                       lbsOutput.innerHTML = weight*1;
//                                       ozOutput.innerHTML = weight*16;
//                                       kgOutput.innerHTML = weight*0.453592;
//                                       } else 
//                                           if (weightType.value === "Ounces") {
//                                               output.style.visibility = 'visible';
//                                               gramsOutput.innerHTML = weight*28.3495; 
//                                               lbsOutput.innerHTML = weight*0.0625;
//                                               ozOutput.innerHTML =  weight*1;
//                                               kgOutput.innerHTML = weight*0.0283495;
//                                           }
//   };
