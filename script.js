const inputEl = document.querySelector("#weightInput");
const outputEl = document.querySelector(".output");
const unitSelectorEl = document.querySelector(".unit-selector");
const outputValues = document.querySelectorAll(".card-output");
const weightTypeEl = document.querySelector("#weightType");
const gramsOutputEl = document.querySelector("#gramsOutput");
const lbsOutputEl = document.querySelector("#lbsOutput");
const ozOutputEl = document.querySelector("#ozOutput");
const kgOutputEl = document.querySelector("#kgOutput");
const kilogramsEl = document.querySelector("#kilograms");
const gramsEl = document.querySelector("#grams");
const poundsEl = document.querySelector("#lbs");
const ouncesEl = document.querySelector("#oz");
const weightRatios = {
                kg: {
                    g: 1000,
                    lbs: 2.20462,
                    oz: 35.274
                },
                gram: {
                    kg: 0.001,
                    lbs: 0.0022046244,
                    oz: 0.03527
                },
                pound: {
                    g: 453.592,
                    kg: 0.453592,
                    oz: 16
                },
                oz: {
                    g: 28.3495,
                    kg: 0.0283495,
                    lbs: 0.0625
                }
};

function toggleOutputDisplay() {
  if (inputEl.value === "") {
    outputEl.classList.add("hidden");
  } else if (inputEl.value !== "") {
    outputEl.classList.remove("hidden");
  }
}

function changePlaceholder() {
  inputEl.placeholder = `enter ${unitSelectorEl.value}`;
}

const conversionsOutput = () => {
  toggleOutputDisplay();
  switch (weightTypeEl.value) {
    case `kilograms`:
      gramsOutputEl.innerHTML = inputEl.value * weightRatios.kg.g;
      lbsOutputEl.innerHTML = inputEl.value * weightRatios.kg.lbs;
      ozOutputEl.innerHTML = inputEl.value * weightRatios.kg.oz;
      kgOutputEl.innerHTML = "";
      break;
    case `grams`:
      gramsOutputEl.innerHTML = "";
      lbsOutputEl.innerHTML = inputEl.value * weightRatios.gram.lbs;
      ozOutputEl.innerHTML = inputEl.value * weightRatios.gram.oz;
      kgOutputEl.innerHTML = inputEl.value * weightRatios.gram.kg;
      break;
    case `pounds`:
      gramsOutputEl.innerHTML = inputEl.value * weightRatios.pound.g;
      lbsOutputEl.innerHTML = "";
      ozOutputEl.innerHTML = inputEl.value * weightRatios.pound.oz;
      kgOutputEl.innerHTML = inputEl.value *weightRratios.pound.kg;
      break;
    case `ounces`:
      gramsOutputEl.innerHTML = inputEl.value * weightRatios.oz.g;
      lbsOutputEl.innerHTML = inputEl.value * weightRatios.oz.lbs;
      ozOutputEl.innerHTML = ``;
      kgOutputEl.innerHTML = inputEl.value * weightRatios.oz.kg;
      break;
  }
};

window.onload = toggleOutputDisplay();
unitSelectorEl.addEventListener("change", changePlaceholder);
weightTypeEl.addEventListener("click", conversionsOutput);
inputEl.addEventListener("input", conversionsOutput);
