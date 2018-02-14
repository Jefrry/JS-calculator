var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    decimalBtn = document.getElementById('decimal'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById('display'),
    memoryCurrentNmber = 0,
    memoryNewNumber = false,
    memoryPendingOperation = '';

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click',function(e){
    numberPress(e.target.textContent);
  });
};
for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click',function(e){
    operation(e.target.textContent);
  });
};
for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click',function(e){
    clear(e.srcElement.id)
  });
};
decimalBtn.addEventListener('click',decimal);

function numberPress(number){
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  }else{
    if (display.value == '0') {
      display.value = number;
    }else{
      display.value += number;
    };
  };
}
function operation(oper){
  var memoryLocalOperation = display.value;
  if (memoryNewNumber && memoryPendingOperation !== '=') {
    display.value = memoryCurrentNmber;
  }else{
    memoryNewNumber = true;
    if (memoryPendingOperation === '+') {
      memoryCurrentNmber += parseFloat(memoryLocalOperation);
    }else if (memoryPendingOperation === '-') {
      memoryCurrentNmber -= parseFloat(memoryLocalOperation);
    }else if (memoryPendingOperation === '*') {
      memoryCurrentNmber *= parseFloat(memoryLocalOperation);
    }else if (memoryPendingOperation === '/') {
      memoryCurrentNmber /= parseFloat(memoryLocalOperation);
    }else{
      memoryCurrentNmber = parseFloat(memoryLocalOperation);
    };
    display.value = memoryCurrentNmber;
    memoryPendingOperation = oper;
  };
}
function decimal(argument){
  var memorylocalDecimal = display.value;
  if (memoryNewNumber) {
    memorylocalDecimal = '0.';
    memoryNewNumber = false;
  }else{
    if (memorylocalDecimal.indexOf('.') === -1) {
      memorylocalDecimal += '.';
    };
  };
  display.value = memorylocalDecimal;
}
function clear(id){
  if (id == 'ce') {
    display.value = '0';
    memoryNewNumber = true;
  }else if (id == 'c') {
    display.value = '0';
    memoryNewNumber = true;
    memoryCurrentNmber = 0;
    memoryPendingOperation = '';
  }
}
