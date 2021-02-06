var selectedRow = null;
var convertIntoArray = [];

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (formData.name.length < 1) {
            alert("Please enter name Greater than 100 char");
        }
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        //convertToArray();
        submit();
        resetForm();
        
    }
}

function submit() {
    debugger;
    var serviceURL = '/Home/ConcactInfoPost';

    //var obj = [
    //    { Name: "1" },
    //    { Name: "1" },
    //    { Name: "1" }
    //];

    var obj = convertIntoArray;

    $.ajax({
        type: "POST",
        url: serviceURL,
        data: { obj: obj },
        dataType: "json",
        success: successFunc,
        error: errorFunc
    });

    function successFunc(data, status) {
        alert(data);
    }

    function errorFunc() {
        alert('error');
    }
    
}

function readFormData() {
    var formData = {};
    formData["email"] = document.getElementById("email").value;
    formData["name"] = document.getElementById("name").value;
    formData["phone"] = document.getElementById("phone").value;
    var ele = document.getElementsByName('gender');

    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            formData["gender"] = ele[i].value;
    }
    
    var e = document.getElementById("drp");
    var result = e.options[e.selectedIndex].value;
    formData["drp"] = result;
    //formData["drp"] = document.getElementById("drp").value;

    formData["message"] = document.getElementById("message").value;
    convertIntoArray.push(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("infoList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.email;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.drp;
    cell3 = newRow.insertCell(5);
    cell3.innerHTML = data.message;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = '<button class="btn btn-info" id="Button" type="button" onClick="Edit(this)">Edit</button> <button class="btn btn-danger" id="Button" type="button" value="Delete" onClick="Delete(this)">Delete</button> ';

}

function resetForm() {
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementsByName("gender").value = "";
    document.getElementById("drp").value = "";
    document.getElementById("message").value = "";
    selectedRow = null;
}

function Edit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("email").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementsByName("gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("drp").value = selectedRow.cells[4].innerHTML;
    document.getElementById("message").value = selectedRow.cells[5].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.email;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.gender;
    selectedRow.cells[4].innerHTML = formData.drp;
    selectedRow.cells[5].innerHTML = formData.message;

}

function Delete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("infoList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    return isValid;
}

function convertToArray() {

    
    //$("table#infoList tr").each(function () {
    //    var rowDataArray = [];
    //    var actualData = $(this).find('td');
    //    if (actualData.length > 0) {
    //        actualData.each(function () {
    //            rowDataArray.push($(this).text());
    //        });
    //        convertIntoArray.push(rowDataArray);
    //    }
    //});
    //console.log(convertIntoArray);
}