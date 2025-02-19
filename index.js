const input = document.querySelector(".input");
const acBtn = document.querySelector(".ac");
const sqrBtn = document.querySelector(".sqr");
const percentBtn = document.querySelector(".percent");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const equalBtn = document.querySelector(".equal");
const pointBtn = document.querySelector(".point");
const plmnBtn = document.querySelector(".pl-mn");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eigthBtn = document.querySelector(".eigth");
const nineBtn = document.querySelector(".nine");
const zeroBtn = document.querySelector(".zero");

let calcArray = [];

function multiplyFoo(a, b) {
    return Number(a) * Number(b);
};

function addFoo(a, b) {
    return Number(a) + Number(b);
};

function minusFoo(a, b) {
    return Number(a) - Number(b);
};

function divideFoo(a, b) {
    return Number(a) / Number(b);
};

acBtn.addEventListener("click", () => {
    input.value = "";
    calcArray = [];
});

zeroBtn.addEventListener("click", () => {
    input.value += 0;
});

oneBtn.addEventListener("click", () => {
    input.value += 1;
});

twoBtn.addEventListener("click", () => {
    input.value += 2;
});

threeBtn.addEventListener("click", () => {
    input.value += 3;
});

fourBtn.addEventListener("click", () => {
    input.value += 4;
});

fiveBtn.addEventListener("click", () => {
    input.value += 5;
});

sixBtn.addEventListener("click", () => {
    input.value += 6;
});

sevenBtn.addEventListener("click", () => {
    input.value += 7;
});

eigthBtn.addEventListener("click", () => {
    input.value += 8;
});

nineBtn.addEventListener("click", () => {
    input.value += 9;
});

pointBtn.addEventListener("click", () => {
    input.value += ".";
});

plmnBtn.addEventListener("click", () => {
    input.value = input.value * -1;
});

sqrBtn.addEventListener("click", () => {
    input.value = Math.sqrt(input.value);
})

let calculate = null;

divideBtn.addEventListener("click", () => {
    calcArray.push(input.value);
    calculate = divideFoo;
    input.value = "";
})

multiplyBtn.addEventListener("click", () => {
    calcArray.push(input.value);
    calculate = multiplyFoo;
    input.value = "";
})

minusBtn.addEventListener("click", () => {
    calcArray.push(input.value);
    calculate = minusFoo;
    input.value = "";
})

plusBtn.addEventListener("click", () => {
    calcArray.push(input.value);
    calculate = addFoo;
    input.value = "";
})

equalBtn.addEventListener("click", () => {
    calcArray.push(input.value);
    input.value = calculate(calcArray[0], calcArray[1]);
    calcArray = [];
    calculate = null;
    return
});

percentBtn.addEventListener("click", () => {
    calcArray.push(input.value);
    input.value = calculate(calcArray[0], (calcArray[0] / 100 * calcArray[1]));
    calcArray = [];
    calculate = null;
    return
});