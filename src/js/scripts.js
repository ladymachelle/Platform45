//clear form

function clearForm() {
  document.getElementById("form").reset();
}

//Slider toggle

function toggle() {
  var form = document.querySelector("[class*=slide_panel]");
  var button = document.querySelector("button[class*=user_button]");

  if (form.classList.contains("slide")) {
    form.classList.remove("slide");
    button.classList.remove("user_button_rotate");
  } else {
    form.classList.add("slide");
    button.classList.add("user_button_rotate");
  }
}

<<<<<<< HEAD
//Form validation

let inputs = document.querySelectorAll("input");
let errMsgContainer = document.createElement("span");

inputs.forEach(function(el) {
  console.log(el);

  el.addEventListener("blur", function(evt) {
    if (this.value == "null" || this.value == "undefined" || this.value == "") {
      switch (el.name) {
        case "name":
          el.parentNode
            .appendChild(errMsgContainer)
            .classList.add("form_input__error_message");
          errMsgContainer.innerHTML = "Please provide name.";
          el.classList.add("form_input__error");
          el.previousSibling.previousSibling.classList.add("form_label__error");
          break;
        case "gender":
          el.parentNode
            .appendChild(errMsgContainer)
            .classList.add("form_input__error_message");
          errMsgContainer.innerHTML = "Please select your gender.";
          el.classList.add("form_input__error");
          el.previousSibling.previousSibling.classList.add("form_label__error");
          break;
        case "date":
          el.parentNode
            .appendChild(errMsgContainer)
            .classList.add("form_input__error_message");
          errMsgContainer.innerHTML = "Please provide date of birth.";
          el.classList.add("form_input__error");
          el.previousSibling.previousSibling.classList.add("form_label__error");
          break;

        case "email":
          el.parentNode
            .appendChild(errMsgContainer)
            .classList.add("form_input__error_message");
          errMsgContainer.innerHTML = "Please provide valid email address.";
          el.classList.add("form_input__error");
          el.previousSibling.previousSibling.classList.add("form_label__error");
          break;
        case "mobile":
          el.parentNode
            .appendChild(errMsgContainer)
            .classList.add("form_input__error_message");
          errMsgContainer.innerHTML = "Please provide mobile number.";
          el.classList.add("form_input__error");
          el.previousSibling.previousSibling.classList.add("form_label__error");
          break;
        case "membership":
          el.parentNode
            .appendChild(errMsgContainer)
            .classList.add("form_input__error_message");
          errMsgContainer.innerHTML = "Please select a membership option.";
          el.classList.add("form_input__error");
          el.previousSibling.previousSibling.classList.add("form_label__error");
          break;
      }
    } else {
      switch (el.name) {
        case "name":
          el.parentNode.removeChild(errMsgContainer);
          el.classList.remove("form_input__error");
          el.previousSibling.previousSibling.classList.remove(
            "form_label__error"
          );
          break;
        case "gender":
          el.parentNode.removeChild(errMsgContainer);
          el.classList.remove("form_input__error");
          el.previousSibling.previousSibling.classList.remove(
            "form_label__error"
          );
          break;
        case "date":
          el.parentNode.removeChild(errMsgContainer);
          el.classList.remove("form_input__error");
          el.previousSibling.previousSibling.classList.remove(
            "form_label__error"
          );
          break;
        case "email":
          el.parentNode.removeChild(errMsgContainer);
          el.classList.remove("form_input__error");
          el.previousSibling.previousSibling.classList.remove(
            "form_label__error"
          );
          break;
        case "mobile":
          el.parentNode.removeChild(errMsgContainer);
          el.classList.remove("form_input__error");
          el.previousSibling.previousSibling.classList.remove(
            "form_label__error"
          );
          break;
        case "membership":
          el.parentNode.removeChild(errMsgContainer);
          el.classList.remove("form_input__error");
          el.previousSibling.previousSibling.classList.remove(
            "form_label__error"
          );
          break;
      }
    }
  });
});
=======
function toggle() {
  var form = document.querySelector("[class*=slide_panel]");
  var button = document.querySelector("button[class*=user_button]");

  if (form.classList.contains("slide")) {
    form.classList.remove("slide");
    button.classList.remove("user_button_rotate");
  } else {
    form.classList.add("slide");
    button.classList.add("user_button_rotate");
  }
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
>>>>>>> 0832e8ab03a6dd4696b8d741b2d559e543d7600c
