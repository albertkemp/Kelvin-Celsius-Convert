const output = document.getElementById('output');

function updateTemperatures(kelvin) {
  output.textContent = `The temperature is ${kelvin} degrees Kelvin.`;

  var celsius = kelvin - 273;
  output.textContent += `\nThe temperature is ${celsius} degrees Celsius.`;

  var fahrenheit = celsius * (9/5) + 32;
  var roundedDownFahrenheit = Math.floor(fahrenheit);
  output.textContent += `\nThe temperature is ${roundedDownFahrenheit} degrees Fahrenheit.`;

  var Newtonscale = celsius * (33/100);
  var flooredDownNewtonscale = Math.floor(Newtonscale);
  output.textContent += `\nThe temperature in the Newton Scale is ${flooredDownNewtonscale}.`;
}

// Initial update with the original value of kelvin
updateTemperatures(293);

// Update temperatures whenever kelvin changes
const kelvinInput = document.getElementById('kelvin-input');
kelvinInput.addEventListener('input', () => {
  const kelvinValue = parseInt(kelvinInput.value);
  updateTemperatures(kelvinValue);
});
