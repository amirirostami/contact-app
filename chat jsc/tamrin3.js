document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let isvalid = true;

  clereror();

  if (name.value === "") {
    showeror(name, "لطفاً نام را وارد کنید");
    isvalid = false;
  }

  if (last.value === "") {
    showeror(last, "لطفاً نام خانوادگی را وارد کنید");
    isvalid = false;
  }

  if (!validemail(email.value)) {
    showeror(email, "لطفاً یک ایمیل معتبر وارد کنید");
    isvalid = false;
  }

  if (isvalid) {
    sabz();
    alert("با موفقیت ارسال شد");
    document.querySelector("form").reset();
  }
});

function showeror(input, message) {
  let smal = document.createElement("small");
  smal.classList.add("eror");
  smal.innerText = message;
  input.style.borderColor = "red";
  input.after(smal);

  function clearOnInput() {
    smal.remove();
    input.style.borderColor = "";
    input.removeEventListener("input", clearOnInput);
  }

  input.addEventListener("input", clearOnInput);
}

function clereror() {
  let smals = document.querySelectorAll("form small");
  smals.forEach(function (s) {
    s.remove();
  });

  let input = document.querySelectorAll("form input");
  input.forEach(function (e) {
    e.style.borderColor = "";
  });
}

function sabz() {
  let old = document.querySelector(".sabz");
  if (old) old.remove();

  let btn = document.getElementById("btn");
  let ss = document.createElement("small");
  ss.classList.add("sabz");
  ss.innerText = "با موفقیت ارسال شد رفیق";
  btn.before(ss);

  setTimeout(function () {
    ss.remove();
  }, 4000);
}

function validemail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
