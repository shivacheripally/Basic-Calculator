// Get all the elements with the class "btn"
var buttons = document.getElementsByClassName("btn");

// Get the display element by its ID
var display = document.getElementById("display");

// Initialize variables for the operands and operator
var operand1 = 0;
var operand2 = null;
var operator = null;

// Loop through all the buttons and add an event listener to each one
for(var i = 0;i < buttons.length;++i){

    buttons[i].addEventListener('click', function(){
        
        // Get the value of the clicked button
        var value = this.getAttribute('data-value');

        // If the value is an arithmetic operator, set the operator and store the first operand
        if(value == '+'){
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }

        else if(value == '-'){
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }

        else if(value == '*'){
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }

        else if(value == '/'){
            operator = '/';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }

        else if(value == '%'){
            operator = '%';
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
        }

        // If the value is +/-, convert the first operand to its opposite sign
        else if(value == '+/-'){
            operator = '+/-';
            operand1 = parseFloat(display.textContent);
            operand1 = -1*operand1;
            display.innerText = operand1;
        }
        
        // If the value is AC, clear the display
        else if(value == 'AC'){
            display.innerText = "";
        }

        // If the value is =, store the second operand and evaluate the expression
        else if(value == '='){
            operand2 = parseFloat(display.textContent);
            display.innerText = eval(operand1+" "+operator+" "+operand2);
        }

        // If the clicked button is a number, append it to the display
        else{
            var check = parseFloat(display.textContent); // check if display contains a number
            display.innerText += value;
        }
    });
}
