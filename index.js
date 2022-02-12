// Target all the classes and id from HTML
let id = (id) => document.getElementById("id");
let classes = (classes) => document.getElementsByClassName("classes");

let firstname = id(`firstname`),
     lastname = id(`lastname`),
     username = id(`username`),
     email = id(`email`),
     password = id(`password`)
     phonenumber = id(`phonenumber`),
     form = id(`form`),

     errorMsg = classes(`error`),
     successIcon = classes(`success-icon`),
     failureIcon = classes(`failure-icon`);

// Target form and submit event listner
form.addEventListner(`submit`, (e) =>{
    e.preventDefault();
});

Create 