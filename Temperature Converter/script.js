function converter() {
    let temp = document.getElementById("temp").value;
    let temptype = document.getElementById("temptype").value;
    if (temptype == "celsius") {
      var cel = temp;
      document.getElementById(
        "converted_value"
      ).innerHTML = `Celsius value is ${cel} C.`;
      // document.getElementById("temperature_type").innerHTML =
      //   "The given value is taken as Fahrenheit";
    } else if (temptype == "fahrenheit") {
      var far = temp * (9 / 5) + 32;
      document.getElementById(
        "converted_value"
      ).innerHTML = `Fahrenheit value is ${far} F.`;
      // document.getElementById("temperature_type").innerHTML =
      //   "The given value is taken as Celsius";
    } else if (temptype == "kelvin") {
      var kel = temp + 273.15;
      document.getElementById(
        "converted_value"
      ).innerHTML = `Kelvin value is ${kel} K.`;
      // document.getElementById("temperature_type").innerHTML =
      //   "The given value is taken as Celsius";
    } else {
      document.getElementById("converted_value").innerHTML = Invalid;
    }
  
    return false;
  }
  