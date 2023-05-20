var selectedRow = null;

function formsubmit() {
    if (validate()) {
        document.getElementById("error_validation-1nd").style.display = "none";
        document.getElementById("error_validation-2nd").style.display = "none";
        const dt = readdata();
        if (selectedRow == null) {
            insertdata(dt);
            reset();
        }
        else {
            updateRecord(dt)
            reset();
        }

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
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a href="#" onClick ="Edit(this) ">Edit</a> &nbsp <a href="#" onClick ="Delete(this)">Delete</a>`
}
function Edit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Fullname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.Fullname;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.Salary;
    selectedRow.cells[4].innerHTML = formData.age;
}

function Delete(td) {
    alert(confirm("are you sure you want to delete this"))
    row = td.parentElement.parentElement
    document.getElementById("list").deleteRow(row.rowIndex)
    reset();
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
    selectedRow = null;
}

function removeerror() {
    document.getElementById("error_validation-1nd").style.display = "none"
    document.getElementById("error_validation-2nd").style.display = "none"
}


