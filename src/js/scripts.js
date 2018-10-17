function clearForm() {
    document.getElementById("form").reset();
}

function expand() {
    var form = document.getElementById("form");
    var blob = document.getElementById("blob");
    form.style.display = "none";
    blob.style.display = "block";
}

function collapse() {
    var form = document.getElementById("form");
    var blob = document.getElementById("blob");
    form.style.display = "block";
    blob.style.display = "none";
}

function toggle() {
    var form = document.getElementById("form");
    form.style.display === "none" ? collapse() : expand();
    // buttonElement.classList.toggle('button_rotate'); 
}



function validate()
{

   if( document.form.name.value == "" )
   {
      alert( "Please provide your name!" );
      document.form.name.focus() ;
      return false;
   }

   if( document.form.email.value == "" )
   {
      alert( "Please provide your Email!" );
      document.form.email.focus() ;
      return false;
   }

   if( document.form.mobile.value == "" ||
   isNaN( document.form.mobile.value ) ||
   document.form.mobile.value.length != 5 )
   {
      alert( "Please provide a valid mobile number." );
      document.form.Zip.focus() ;
      return false;
   }

   return( true );
}


