function formsubmit() {
    if (validate()) {
        document.getElementById("error_validation-1nd").style.display = "none";
        document.getElementById("error_validation-2nd").style.display = "none";

        const dt = readdata();
        insertdata(dt);
        reset();
    }
}


function validate() {
    let valid = true
    if (document.getElementById("Fullname").value == "") {
        valid = false;
        document.getElementById("error_validation-1nd").style.display = "inline"
    }
    else {
        document.getElementById("error_validation-1nd").style.display = "none"
    }
    if (document.getElementById("Salary").value == "") {
        valid = false;
        document.getElementById("error_validation-2nd").style.display = "inline"
    }
    else {
        document.getElementById("error_validation-2nd").style.display = "none"
    }
    return valid
}


var Srno = 0;
function insertdata(data) {
    Srno++;
    let table = document.getElementById("list").getElementsByTagName("tbody")[0]
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = Srno;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.Fullname
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.email
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.Salary
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.age

}


function readdata() {
    var data = {}
    data["Fullname"] = document.getElementById("Fullname").value
    data["email"] = document.getElementById("email").value
    data["Salary"] = document.getElementById("Salary").value
    data["age"] = document.getElementById("age").value

    return data;
}

function reset() {
    document.getElementById("Fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("Salary").value = "";
    document.getElementById("age").value = "";
}

function removeerror() {
    document.getElementById("error_validation-1nd").style.display = "none"
    document.getElementById("error_validation-2nd").style.display = "none"
}




