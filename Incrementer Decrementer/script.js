const number = document.getElementById("number")

function increment() {
  var num = number.value;
  num++;
  number.value = num;
  console.log(num);
}

function decrement() {
  var num = number.value;
  if (num == 0) {
    num = 0;
  } else {
    num--;
    number.value = num;
    console.log(num);
  }
}

function reset() {
  number.value = 0;
}