console.log("hello");


function converter() {
  const input = document.getElementById('degreeval');
  const degtype = document.getElementById('degtype');
  const result = document.getElementById('resultval');
  const restype = document.getElementById('restype');

  if (input.value === '') {
    result.value = '';
    alert('Please enter a valid value in the inputbox');
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Celcius' && restype.options[restype.selectedIndex].value === 'Farenheit'){
    result.value = ((Number(input.value)*9)/5 + 32).toFixed(2) + ' '+' F';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Farenheit' && restype.options[restype.selectedIndex].value === 'Celcius'){
    result.value = (((Number(input.value)-32)*5)/9).toFixed(2) + ' '+' C';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Celcius' && restype.options[restype.selectedIndex].value === 'Kelvin'){
    result.value = (Number(input.value)+273.15).toFixed(2)+' '+'K';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Kelvin' && restype.options[restype.selectedIndex].value === 'Celsius'){
    console.log(input.val);
    result.value = (Number(input.value)-273.15).toFixed(2) + ' '+' C';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Farenheit' && restype.options[restype.selectedIndex].value === 'Kelvin'){
    result.value = (((Number(input.value)-32)*5)/9 + 273.15).toFixed(2)+' '+ 'K';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Kelvin' && restype.options[restype.selectedIndex].value === 'Farenheit'){
    result.value = (((Number(input.value)-273.15)*9)/5 + 32).toFixed(2)+' '+'F';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Kelvin' && restype.options[restype.selectedIndex].value === 'Kelvin'){
    result.value = input.value + ' ' + 'K';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Farenheit' && restype.options[restype.selectedIndex].value === 'Farenheit'){
    result.value = input.value + ' ' + 'F';
  }
  else if(degtype.options[degtype.selectedIndex].value === 'Celsius' && restype.options[restype.selectedIndex].value === 'Celsius'){
    result.value = input.value + ' ' + 'C';
  }
}