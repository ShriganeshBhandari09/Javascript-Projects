var num = 0;
function increment() {
  num++;
  document.getElementById("number").innerHTML = num;
  console.log(num);
  return false;
}

function decrement() {
  if (num == 0) {
    num = 0
  } else {
    num--;
    document.getElementById("number").innerHTML = num;
    console.log(num);
  }
  return false;
}
