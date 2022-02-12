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
// let form = document.querySelector("form")
form.addEventListner(`submit`, (e) =>{
    e.preventDefault();

    engine(firstname, 0, "Firstname cannot be blank");
    engine(lastname, 1, "Last name cannot be blank");
    engine(username, 2, "Username cannot be blank");
    engine(email, 3, "email cannot be blamk");
    engine(password, 4, "Password must consist of numbers,letters and symbols")
});

// Create a function named engine which will have three arguments
// let engine = (id, serial, message) => {}
// id- will target our id;
// serial- will target classes(error class, success and failure)
// message- will print a message inside our .error class
// And create an if Statement

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = `2px solid green`;

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}