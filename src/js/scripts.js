function clearForm() {
    document.getElementById("form_clear").reset();
}

function expand() {
    var form = document.getElementById("form_clear");
    var blob = document.getElementById("blob");
    form.style.display = "none";
    blob.style.display = "block";
}

function collapse() {
    var form = document.getElementById("form_clear");
    var blob = document.getElementById("blob");
    form.style.display = "block";
    blob.style.display = "none";
}

function toggle() {
    var form = document.getElementById("form_clear");
    form.style.display === "none" ? collapse() : expand();
}
