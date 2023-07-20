var n = 1;

function addRow() {

    var formData = {};

    formData["FirstName"] = document.getElementById("fname").value;
    formData["LastName"] = document.getElementById("lname").value;
    formData["Address"] = document.getElementById("address").value;
    formData["Pincode"] = document.getElementById("pincode").value;
    formData["State"] = document.getElementById("state").value;
    formData["Country"] = document.getElementById("country").value;

    get = document.getElementById("male");
    get1 = document.getElementById("female");
    if (get.checked) {
        formData["Gender"] = document.getElementById("male").value;
    }
    if (get1.checked) {
        formData["Gender"] = document.getElementById("female").value;
    }

    formData["FoodItem"] = document.getElementById("foods").value;



    var row = document.getElementById("show_table");
    var new_row = row.insertRow(n);


    /* if (FirstName[x] && LastName[x] && Address[x] && Pincode[x] && State[x] && Country[x] && Gender[x] && FoodItem[x]) {
        var new_row = row.insertRow(n);
    } */

    var cel1 = new_row.insertCell(0);
    var cel2 = new_row.insertCell(1);
    var cel3 = new_row.insertCell(2);
    var cel4 = new_row.insertCell(3);
    var cel5 = new_row.insertCell(4);
    var cel6 = new_row.insertCell(5);
    var cel7 = new_row.insertCell(6);
    var cel8 = new_row.insertCell(7);

    cel1.innerHTML = formData["FirstName"];
    cel2.innerHTML = formData["LastName"];
    cel3.innerHTML = formData["Address"];
    cel4.innerHTML = formData["Pincode"];
    cel5.innerHTML = formData["State"];
    cel6.innerHTML = formData["Country"];
    cel7.innerHTML = formData["Gender"];
    cel8.innerHTML = formData["FoodItem"];

    n++;

    return formData;


}