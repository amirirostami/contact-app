// دفتر چه مخاطبین


let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
if (!Array.isArray(contacts)) {
    contacts = [];
}

window.addEventListener("DOMContentLoaded", loadContacts);


document.getElementById("addContact").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let ul = document.getElementById("contactList");

 
    if (name === "" || phone === "" || email === "") {
        alert("لطفاً همه فیلدها را پر کنید.");
        return;
    }

    if (!emailValid(email)) {
        alert("ایمیل اشتباه است لطفاً اصلاح کنید!");
        return;
    }

   if (!phoneValid(phone)) {
          alert("شماره تلفن اشتباه است اطلاح کنید");
          return;
   }

    let newContact = { name, phone, email };
    contacts.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(contacts));

  
    addContactToDOM(newContact);

  
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
});


function emailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function phoneValid(phone) {
    return /^(0|\+98)[9](0|1|2|3|9)[0-9]{8,8}$/.test(phone);
}

function loadContacts() {
    contacts.forEach(function (contact) {
        addContactToDOM(contact);
    });



}


function addContactToDOM(contact) {
    let ul = document.getElementById("contactList");
    let li = document.createElement("li");
    li.classList.add("list-item");
    li.innerHTML = `${contact.name}<br/>${contact.phone}<br/>${contact.email}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-list");

   
    deleteBtn.addEventListener("click", function () {
        if (confirm("آیا مطمئن هستید که می‌خواهید این مخاطب را حذف کنید؟")) {
            ul.removeChild(li);
             contacts = contacts.filter(c => c.email !== contact.email);
             localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    });

   
    li.appendChild(deleteBtn);
    ul.appendChild(li);
}




    document.getElementById("bob").addEventListener("click" , function() {
     let qouery = document.getElementById("serch").value.toLowerCase()
   
     filterconcats(qouery);
});


function filterconcats(qouery) {
 
      let listitem = document.querySelectorAll("#contactList li");
      let fund = false

       listitem.forEach(function(li) {
          if (li.textContent.toLowerCase().includes(qouery)) {
                li.style.display = "block";
                fund = true ; 

          }else {
               li.style.display = "none";           
          }
       })

       let resalte = document.getElementById("noResultMessage");
        
       
       if (fund) {
          resalte.style.display = "none"
       }else {
          resalte.style.display = "block"
       }

       document.getElementById("serch").value= "";
}


