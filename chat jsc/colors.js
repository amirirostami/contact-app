// بازی با رنگ ها

let fruits = ["موز", "سیب", "پرتقال", "گلابی"];
let ul = document.getElementById("Resulte");

fruits.forEach(function (e) {
  let li = document.createElement("li");
  li.className = "list-item";
  li.innerHTML = e;
  ul.appendChild(li);

  li.addEventListener("click", function () {
    li.remove();
  });
});




let colors = ["red", "blue", "green", "yellow", "black"];
let body = document.querySelector("body");

colors.forEach(function (x) {
  let div = document.createElement("div");
  div.innerText = x;
  div.style.backgroundColor = x;
  div.style.color = "white";
  div.style.padding = "10px";
  div.style.margin = "10px";
  div.style.width = "100px";
  div.style.textAlign = "center";
  body.appendChild(div);

  div.addEventListener("click", function () {
    div.remove();
  });
});




document.getElementById("bb").addEventListener("click", addcolor);
document
  .getElementById("colorInput")
  .addEventListener("keypress", function (x) {
    if (x.key === "Enter") {
      addcolor();
    }
  });

function addcolor() {
  let inp = document.getElementById("colorInput").value;
  let cantioner = document.getElementById("demo");

  if (inp === "") {
    alert("نباید فیلد خالی باشد");
    document.getElementById("colorInput").focus();
    return;
  }

  let div = document.createElement("div");
  div.innerText = inp;
  div.style.backgroundColor = inp;
  div.style.color = "white";
  div.style.margin = "5px";
  div.style.padding = "10px";

  cantioner.appendChild(div);

  document.getElementById("colorInput").value = "";
}
