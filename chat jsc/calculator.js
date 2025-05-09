function piplain(value) {
  document.getElementById("display").value += value;
}

function mosaviii() {
  let inp = document.getElementById("display").value;
  if (inp == "") {
    alert("Eror !!");
  } else {
    try {
      document.getElementById("display").value = eval(inp);
    } catch (error) {
      alert("خطا!!");
    }
  }
}

function pakki() {
  document.getElementById("display").value = "";
}

function ooops() {
  let inpp = document.getElementById("display").value;

  document.getElementById("display").value = inpp.slice(0, -1);
}
