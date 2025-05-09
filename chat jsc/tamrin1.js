let enterboton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

window.addEventListener("DOMContentLoaded", loadTodos);

enterboton.addEventListener("click", dodword);
input.addEventListener("keypress", dokmeh);

function polos() {
  return input.value.length;
}

function dodword() {
  if (polos() > 0) {
    npibol();
  }
}

function dokmeh(e) {
  if (polos() > 0 && e.which == 13) {
    npibol();
  }
}

function npibol(text, done = false) {
  let lis = document.createElement("li");
  lis.className = "list-item";
  lis.textContent = text || input.value;
  ul.appendChild(lis);
  input.value = "";

  if (done) lis.classList.add("done");

  lis.addEventListener("click", color);
  function color() {
    lis.classList.toggle("done");
    saveTodos();
  }

  let bb = document.createElement("button");
  bb.textContent = "X";
  lis.appendChild(bb);
  bb.addEventListener("click", dell);

  function dell() {
    lis.remove();
    saveTodos();
  }

  ul.appendChild(lis);
  saveTodos();

  let editbtn = document.createElement("button");
  editbtn.textContent = "✎";
  lis.appendChild(editbtn);
  editbtn.addEventListener("click", edeitii);
  function edeitii() {
    let newText = prompt(
      "متن جدید رو وارد کن",
      lis.childNodes[0].textContent.trim()
    );

    if (newText !== null && newText !== "") {
      lis.childNodes[0].textContent = newText.trim();
    }
    saveTodos();
  }
}

function saveTodos() {
  let todos = [];
  document.querySelectorAll("ul li").forEach(function (li) {
    let text = li.firstElementChild.textContent.trim();
    let done = li.classList.contains("done");
    todos.push({ text, done });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(function (tod) {
    npibol(tod.text, tod.done);
  });
}
