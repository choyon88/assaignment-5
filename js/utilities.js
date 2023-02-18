const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = '#' + randomColor;
  });

  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = 'white';
  });
});


function getInputElementFiled1(elementId) {
    const inputFieldData1 = document.getElementById(elementId);
    const inputFieldDataInString1 = inputFieldData1.value;
    const inputFieldValue1 = parseFloat(inputFieldDataInString1);
    inputFieldData1.value = '';
    return inputFieldValue1;
}
function getInputElementFiled2(elementId) {
  const inputFieldData2 = document.getElementById(elementId);
  const inputFieldDataInString2 = inputFieldData2.value;
    const inputFieldValue2 = parseFloat(inputFieldDataInString2);
    inputFieldData2.value = '';
    return inputFieldValue2;

}
function setInputValueFirst(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
function setInputValueSecond(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
function getValueFromBoxFirst(input1) {
  const val1String = document.getElementById(input1).innerText;
  const value1 = parseFloat(val1String);
  return value1;
  
}
function getValueFromBoxSecond(input2) {
  const val2String = document.getElementById(input2).innerText;
  const value2 = parseFloat(val2String);
  return value2;
}

