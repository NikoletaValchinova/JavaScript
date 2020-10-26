const res = document.getElementById('res');

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
    button.addEventListener('click', calculate); 
});

var exp = '';
var regex = /(\d+)/g;
function calculate(event) {
    const clickedButtonValue = event.target.innerHTML;

    switch(clickedButtonValue)
    {
        case 'C':
            res.innerHTML = '';
            exp = '';
            break;
        case '=':
            exp = exp.replace(regex, function(match) {
                return parseInt(match, 2);
            });
            res.innerHTML = eval(exp).toString(2);
            exp = res.innerHTML;
            break;
        default:
            res.innerHTML += clickedButtonValue;
            exp = res.innerHTML;
            break;
    }
}