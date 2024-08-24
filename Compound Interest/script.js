// let principal = 10000;
// let rateOfInterest = 20;
// let numberOfIimesInterestIsCompoundedPerYear = 2;
// let time = 1.5;

// let compoundInterest = principal*(1+(rateOfInterest/(numberOfIimesInterestIsCompoundedPerYear*100)))**(numberOfIimesInterestIsCompoundedPerYear*time);

// console.log(compoundInterest)

function processForm() {
  let principal = document.getElementById("principal").value;
  let rateOfInterest = document.getElementById("rateOfInterest").value;
  let n = document.getElementById(
    "numberOfTimesInterestIsCompoundedPerYear"
  ).value;
  let time = document.getElementById("years").value;
  let compoundInterest =
    principal * (1 + rateOfInterest / (n * 100)) ** (n * time);


  console.log("Compound Interest is ₹ " + Math.floor(compoundInterest));

  const span = document.getElementById("compoundInterest")
 
  alert("Compound Interest is ₹ " + Math.floor(compoundInterest));

  span.innerHTML = Math.floor(compoundInterest);

  return false;

}
