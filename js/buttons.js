let counter = 1;
document.getElementById('triangle').addEventListener('click', () => {
    const getValue1 = getInputElementFiled1('triangle-input-1');
   
    const getValue2 = getInputElementFiled2('triangle-input-2');

    // validation code here 
    if (isNaN(getValue1) || isNaN(getValue2) || getValue1 <= 0 || getValue2 <= 0) {
        alert('Please enter valid numbers for the diagonal lengths.');
        return;
    }

    const result = (0.5 * getValue1 * getValue2);
    setInputValueFirst('triangle-b', getValue1);
    setInputValueSecond('triangle-h', getValue2);
    const resultShow = document.getElementById('results');

    const resultButton = document.createElement('button');
    resultButton.innerText = 'Convert to m\u00B2';
    resultButton.style.backgroundColor = 'blue';
        resultButton.style.borderRadius = 'lg';
        resultButton.style.padding = "10px";


    const newElement = document.createElement('p');
    newElement.innerText = `Result: ${result}`;
    newElement.textContent = `${counter}. Triangle \u00A0 \u00A0 \u00A0 ${result}cm\u00B2`;
    newElement.appendChild(resultButton);
    resultShow.appendChild(newElement);
    counter++;
    

});

document.getElementById('rectangle').addEventListener('click', () => {
    const getValue1 = getInputElementFiled1('rectangle-input-1');
    const getValue2 = getInputElementFiled2('rectangle-input-2');

    // validation code here 
    if (isNaN(getValue1) || isNaN(getValue2) || getValue1 <= 0 || getValue2 <= 0) {
        alert('Please enter valid numbers for the diagonal lengths.');
        return;
    }

    const result = (0.5 * getValue1 * getValue2);
    setInputValueFirst('rectangle-w', getValue1);
    setInputValueSecond('rectangle-i', getValue2);

    const resultShow = document.getElementById('results');
    const resultButton = document.createElement('button');
    resultButton.innerText = 'Convert to m\u00B2';
    resultButton.style.backgroundColor = 'blue';
        resultButton.style.borderRadius = 'lg';
        resultButton.style.padding = "10px";

    const newElement = document.createElement('p');
    newElement.innerText = `Result: ${result}`;
    newElement.textContent = `${counter}. Rectangle \u00A0 \u00A0 \u00A0 ${result}cm\u00B2`;
    newElement.appendChild(resultButton);
    
    resultShow.appendChild(newElement);
    counter++;

});

document.getElementById('parallelogram').addEventListener('click', () => {
    const getValue1 = getInputElementFiled1('parallelogram-input-1');
    const getValue2 = getInputElementFiled2('parallelogram-input-2');

    // validation code here 
    if (isNaN(getValue1) || isNaN(getValue2) || getValue1 <= 0 || getValue2 <= 0) {
        alert('Please enter valid numbers for the diagonal lengths.');
        return;
    }
    
    setInputValueFirst('parallelogram-b', getValue1);
    setInputValueSecond('parallelogram-h', getValue2);
    const result = (getValue1 * getValue2);

    const resultShow = document.getElementById('results');
    const resultButton = document.createElement('button');
    resultButton.innerText = 'Convert to m\u00B2';
    resultButton.style.backgroundColor = 'blue';
        resultButton.style.borderRadius = 'lg';
        resultButton.style.padding = "10px";

    const newElement = document.createElement('p');
    newElement.innerText = `Result: ${result}`;
    newElement.textContent = `${counter}. Parallelogram \u00A0 \u00A0 \u00A0 ${result}cm\u00B2`;
    newElement.appendChild(resultButton);
    resultShow.appendChild(newElement);
    counter++;

});


// rhombos code here


document.getElementById('pen-squre-rhombus').addEventListener('click', () => {
    const displays = document.getElementById('display-rombos-input-block');
    displays.style.display = 'block';
})
document.getElementById('rhombus-set').addEventListener('click', () => {

    const getValue1 = getInputElementFiled1('rhombus-input-1');
    const getValue2 = getInputElementFiled2('rhombus-input-2');
    // validation code here 
    if (isNaN(getValue1) || isNaN(getValue2)) {
        alert('Please enter valid numeric values');
        return;
    }
    setInputValueFirst('rhombus-d1', getValue1);
    setInputValueSecond('rhombus-d2', getValue2);
    const displays = document.getElementById('display-pentagon-input-block');
    displays.style.display = 'none';

});

document.getElementById('rhombus').addEventListener('click', () => {
    const getValue1 = getValueFromBoxFirst('rhombus-d1');
    const getValue2 = getValueFromBoxSecond('rhombus-d2');

    if (isNaN(getValue1) || isNaN(getValue2) || getValue1 <= 0 || getValue2 <= 0) {
        alert('Please enter valid numbers for the diagonal lengths.');
        return;
    }
    const result = (0.5 * getValue1 * getValue2);

    const resultShow = document.getElementById('results');
    const resultButton = document.createElement('button');
    resultButton.innerText = 'Convert to m\u00B2';
    resultButton.style.backgroundColor = 'blue';
        resultButton.style.borderRadius = 'lg';
        resultButton.style.padding = "10px";
    

    const newElement = document.createElement('p');
    newElement.innerText = `Result: ${result}`;
    newElement.textContent = `${counter}. Rhombus \u00A0 \u00A0 \u00A0 ${result}cm\u00B2`;
    newElement.appendChild(resultButton);
    resultShow.appendChild(newElement);
    counter++;
})

// pentagon
document.getElementById('pen-squre-pentagon').addEventListener('click', () => {
    const displays = document.getElementById('display-pentagon-input-block');
    displays.style.display = 'block';
})
document.getElementById('pentagon-set').addEventListener('click', () => {

    const getValue1 = getInputElementFiled1('pentagon-input-1');
    const getValue2 = getInputElementFiled2('pentagon-input-2');
    // validation code here 
    if (isNaN(getValue1) || isNaN(getValue2)) {
        alert('Please enter valid numeric values');
        return;
    }
    setInputValueFirst('pentagon-p', getValue1);
    setInputValueSecond('pentagon-b', getValue2);
    const displays = document.getElementById('display-pentagon-input-block');
    displays.style.display = 'none';
});

document.getElementById('pentagon').addEventListener('click', () => {
    const getValue1 = getValueFromBoxFirst('pentagon-p');
    const getValue2 = getValueFromBoxSecond('pentagon-b');

    if (isNaN(getValue1) || isNaN(getValue2) || getValue1 <= 0 || getValue2 <= 0) {
        alert('Please enter valid numbers for the diagonal lengths.');
        return;
    }
    const result = (0.5 * getValue1 * getValue2);

    const resultShow = document.getElementById('results');

    const resultButton = document.createElement('button');
resultButton.innerText = 'Convert to m\u00B2';
resultButton.style.backgroundColor = 'blue';
    resultButton.style.borderRadius = 'lg';
    resultButton.style.padding = "10px";

    const newElement = document.createElement('p');
    newElement.innerText = `Result: ${result}`;
    newElement.textContent = `${counter}. Pentagon \u00A0 \u00A0 \u00A0 ${result}cm\u00B2`;
    newElement.appendChild(resultButton);
    
    resultShow.appendChild(newElement);
    counter++;
})

// ellipse
document.getElementById('pen-squre-ellipse').addEventListener('click', () => {
    const displays = document.getElementById('display-ellipse-input-block');
    displays.style.display = 'block';
})
document.getElementById('ellipse-set').addEventListener('click', () => {
    
    // displays.style.display = 'block';
    const getValue1 = getInputElementFiled1('ellipse-input-1');
    const getValue2 = getInputElementFiled2('ellipse-input-2');
    const displays = document.getElementById('display-ellipse-input-block');
    displays.style.display = 'none';
    // validation code here 
    if (isNaN(getValue1) || isNaN(getValue2)) {
        alert('Please enter valid numeric values');
        return;
    }
    setInputValueFirst('ellipse-a', getValue1);
    setInputValueSecond('ellipse-b', getValue2);
    

});

document.getElementById('ellipse').addEventListener('click', () => {
    const getValue1 = getValueFromBoxFirst('ellipse-a');
    const getValue2 = getValueFromBoxSecond('ellipse-b');

    if (isNaN(getValue1) || isNaN(getValue2) || getValue1 <= 0 || getValue2 <= 0) {
        alert('Please enter valid numbers for the diagonal lengths.');
        return;
    }
    const result = (3.1416 * getValue1 * getValue2).toFixed(2);

    const resultShow = document.getElementById('results');

    const newElement = document.createElement('p');
    newElement.innerText = `Result: ${result}`;
 
    const resultButton = document.createElement('button');
resultButton.innerText = 'Convert to m\u00B2';
resultButton.style.backgroundColor = 'blue';
    resultButton.style.borderRadius = 'lg';
    resultButton.style.padding = "10px";

    newElement.textContent = `${counter}. Ellipse \u00A0 ${result}cm \u00B2`;

    newElement.appendChild(resultButton);

    resultShow.appendChild(newElement, resultButton);
    
    counter++;
})




document.getElementById('blog').addEventListener('click', () => {
    window.location.href = 'blog.html';
})



