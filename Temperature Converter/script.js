function converter() {
  let temperature = parseFloat(document.getElementById("temperature").value);
  let givenTempType = document.getElementById("given_temptype").value;
  let convertTempType = document.getElementById("convert_temptype").value;
  let answer = document.getElementById("converted_value");

  // Validation for temperature input
  if (isNaN(temperature)) {
    answer.innerHTML = "Please enter a valid number.";
    return false;
  }

  // Conversion functions
  function toFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
  }

  function toKelvin(celsius) {
    return celsius + 273.15;
  }

  function fromFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }

  function fromKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  // Convert based on types
  let result;
  if (givenTempType === "given_celsius") {
    if (convertTempType === "fahrenheit") {
      result = toFahrenheit(temperature);
      answer.innerHTML = `${result.toFixed(2)} °F`;
    } else if (convertTempType === "kelvin") {
      result = toKelvin(temperature);
      answer.innerHTML = `${result.toFixed(2)} K`;
    }
  } else if (givenTempType === "given_fahrenheit") {
    if (convertTempType === "celsius") {
      result = fromFahrenheitToCelsius(temperature);
      answer.innerHTML = `${result.toFixed(2)} °C`;
    } else if (convertTempType === "kelvin") {
      result = toKelvin(fromFahrenheitToCelsius(temperature));
      answer.innerHTML = `${result.toFixed(2)} K`;
    }
  } else if (givenTempType === "given_kelvin") {
    if (convertTempType === "celsius") {
      result = fromKelvinToCelsius(temperature);
      answer.innerHTML = `${result.toFixed(2)} °C`;
    } else if (convertTempType === "fahrenheit") {
      result = toFahrenheit(fromKelvinToCelsius(temperature));
      answer.innerHTML = `${result.toFixed(2)} °F`;
    }
  } else {
    answer.innerHTML = "Invalid temperature type.";
  }

  return false;
}
