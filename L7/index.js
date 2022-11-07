function validateDate_MMDDYYYY(input_date) {
    var parts = input_date.split(/[\/\-\.]/);

    if (parts.length < 3) {
        return false;
    }
    var dt = new Date(parts[2], parts[0] - 1, parts[1]);
    console.log("date is ", dt.toString());
    return dt && dt.getMonth() === parseInt(parts[0], 10) - 1;
}

function validateForm(event) {
    var date_str = document.getElementById("myform_date").value;
    if (!validateDate_MMDDYYYY(date_str)) {
        document.getElementById("date_error").classList.remove("hidden");
    } else {
        document.getElementById("date_error").classList.add("hidden");
        alert("validation success");
    }
    event.preventDefault();
}

function validateform() {
    var name = document.myform.name.value;
    var password = document.myform.password.value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}

document.getElementById("myform").addEventListener("submit", validateForm);