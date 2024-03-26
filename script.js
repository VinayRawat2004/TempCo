const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const convertButton = document.getElementById('convert-button');

const convertTemperature = () => {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 1.8) + 32;
    const kelvin = celsius + 273.15;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
  } else {
    alert('Please enter a valid number for Celsius');
  }
};

const convertBackToCelsius = () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const kelvin = parseFloat(kelvinInput.value);
  
  if (!isNaN(fahrenheit)) {
    const celsius = (fahrenheit - 32) / 1.8;
    celsiusInput.value = celsius.toFixed(2);
  } else if (!isNaN(kelvin)) {
    const celsius = kelvin - 273.15;
    celsiusInput.value = celsius.toFixed(2);
  } else {
    alert('Please enter a valid number for Fahrenheit or Kelvin');
  }
};

convertButton.addEventListener('click', convertTemperature);
fahrenheitInput.addEventListener('input', convertBackToCelsius);
kelvinInput.addEventListener('input', convertBackToCelsius);
