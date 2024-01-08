let son = prompt("istalgan soningizni kiriting")
let bol = son % 2
let javob = bol == 0
console.log(javob)
if (javob == true) {
    document.getElementById("javob").innerHTML = "Yozgan raqamingiz juft";
  } else {
    document.getElementById("javob").innerHTML = "Yozgan raqamingiz toq";
  }