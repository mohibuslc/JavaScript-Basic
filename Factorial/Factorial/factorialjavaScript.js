


function factorial() {

  var n = document.getElementById("num").value;

   var factorial=1;

  if (n <=0 || n > 10) {

    document.getElementById("fact").innerHTML = " Error ! ";

  }

  else {

    for (var i = 1; i <= n; i++) {
      var factorial = factorial * i;
    }





  }

  document.getElementById("fact").innerHTML = factorial;
}

