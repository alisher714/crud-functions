

function formsubmit() {
    if (validate()) {
        alert("form is submitted")
        const dt = readdata();
        insertdata(dt);
    }
    else {
        alert("plz enter something")
    }
}

function validate() {
    let valid = true
    if (document.getElementById("Fullname").value == "" || document.getElementById("Salary").value == "") {
        valid = false;
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