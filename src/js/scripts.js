function clearForm() {
  document.getElementById("form").reset();
}

function expand() {
  var form = document.getElementById("form");
  var blob = document.getElementById("blob");
}

function collapse() {
  var form = document.getElementById("form");
  var blob = document.getElementById("blob");
}

function toggle() {
  var form = document.querySelector("slide_panel");
  var list = Object.values("form.classList");
  var button = document.querySelector("user_button");

  list.map(x => {
    if (x === "slide") {
      form.classList.remove("slide");
      button.classList.remove("user_button_rotate");
    } else {
      form.classList.add("slide");
      button.classList.add("user_button_rotate");
    }
  });
}
// function validate() {
//   if (document.form.name.value == "") {
//     alert("Please provide your name!");
//     document.form.name.focus();
//     return false;
//   }

//   if (document.form.email.value == "") {
//     document.getElementById("error").innerHTML = "error here";
//     document.form.email.focus();
//     return false;
//   }

//   if (
//     document.form.mobile.value == "" ||
//     isNaN(document.form.mobile.value) ||
//     document.form.mobile.value.length != 12
//   ) {
//     alert("Please provide a valid mobile number.");
//     document.form.mobile.focus();
//     return false;
//   }

//   return true;
// }
