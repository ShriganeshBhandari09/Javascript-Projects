function processForm() {
  let num = document.getElementById("number").value;
  let isEven;
  let remainder;
  let evenOrOdd = document.getElementById("num1");

  remainder = num % 2;
  isEven = remainder === 0;

  if (isEven) {
    evenOrOdd.innerHTML = "Even.";
    console.log("The number " + num + " is Even.")
  } else {
    evenOrOdd.innerHTML = "Odd.";
    console.log("The number " + num + " is Odd.")

  }

  return false;
}
