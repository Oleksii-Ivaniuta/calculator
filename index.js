const input = document.querySelector(".input");
const btnDiv = document.querySelector(".button-div")

let a = null;
let b = null;
let calculate = null;

const multiplyFoo = (a, b) => Number(a) * Number(b);
const addFoo = (a, b) => Number(a) + Number(b);
const minusFoo = (a, b) => Number(a) - Number(b);
const divideFoo = (a, b) => Number(a) / Number(b);

btnDiv.addEventListener("click", (event) => {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    else if (event.target.dataset.value === "ac") {
        input.placeholder = 0;
        input.value = "";
        a = null;
        b = null;
        calculate = null;
        return;
    }
    else if (event.target.dataset.value === "sqr") {
            input.value = Math.sqrt(input.value);
        a = input.value;
        return;
    }
    else if (event.target.dataset.value === "percent") {
            if (a && calculate) {
    b = input.value;
        input.value = (a / 100 * b);
            input.placeholder = 0;
    return
         }
         input.value = `ERR -> AC`
         a = null;
         b = null;
         calculate = null;
        input.placeholder = 0;
      return
    }
    else if (event.target.dataset.value === "divide") {
            a = input.value;
    calculate = divideFoo;
    input.placeholder = a;
        input.value = "";
        return;
    }
    else if (event.target.dataset.value === "multiply") {
            a = input.value;
    calculate = multiplyFoo;
    input.placeholder = a;
        input.value = "";
        return;
    }
    else if (event.target.dataset.value === "minus") {
           a = input.value;
    calculate = minusFoo;
    input.placeholder = a;
        input.value = "";
        return;
    }
    else if (event.target.dataset.value === "plus") {
           a = input.value;
    calculate = addFoo;
    input.placeholder = a;
        input.value = "";
        return;
    }
    else if (event.target.dataset.value === "plmn") {
        input.value = input.value * -1;
        return;
    }
    else if (event.target.dataset.value === "equal") {
           b = input.value;
    input.value = calculate(a, b);
    a = input.value;
    b = null;
    calculate = null;
    input.placeholder = 0;
    return 
    }
    else {
        input.value += event.target.dataset.value;
        return;
}
})
