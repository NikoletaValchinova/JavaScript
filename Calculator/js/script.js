const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    const clickedButtonValue = event.target.value;
    let operatorRegex = /\+|\-|\*|\//;
    let length = display.value.length-1;
    let last = display.value[length];

    if(clickedButtonValue === '=') {
        if(display.value !== '') {
            display.value = eval(display.value);
        }
    } 
    else if (clickedButtonValue === 'C') {
        display.value = '';
    } 
    else if (clickedButtonValue.search(operatorRegex) != -1 
            && last.search(operatorRegex) != -1) {
        display.value = display.value.slice(0,length) + clickedButtonValue;
      }
    else {
        display.value += clickedButtonValue;
    }
}