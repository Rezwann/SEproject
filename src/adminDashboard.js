function DeleteTableRow(rowNum) {
    document.getElementById("row" + rowNum + "").outerHTML = "";
}

function EditTableRow(rowNum) {
    // show save instead of edit
    document.getElementById("edit_button" + rowNum).style.display = "none";
    document.getElementById("save_button" + rowNum).style.display = "block";

    var ID = document.getElementById("ID_row" + rowNum);
    var FNAME = document.getElementById("FNAME_row" + rowNum);
    var LNAME = document.getElementById("LNAME_row" + rowNum);
    var ROLE = document.getElementById("ROLE_row" + rowNum);
    var ASSIGNEDMANAGER = document.getElementById("assignedManager_row" + rowNum);
    var PERMTYPE = document.getElementById("PERMTYPE_row" + rowNum);
    var PNUM = document.getElementById("PNUM_row" + rowNum);
    var EMAIL = document.getElementById("EMAIL_row" + rowNum);
    var UNAME = document.getElementById("UNAME_row" + rowNum);
    var PASS = document.getElementById("PASS_row" + rowNum);
    var LACTIVE = document.getElementById("LACTIVE_row" + rowNum);

    var ID_data = ID.innerHTML;
    var FNAME_data = FNAME.innerHTML;
    var LNAME_data = LNAME.innerHTML;
    var ROLE_data = ROLE.innerHTML;
    var ASSIGNEDMANAGER_data = ASSIGNEDMANAGER.innerHTML;
    var PERM_data = PERMTYPE.innerHTML;
    var PNUM_data = PNUM.innerHTML;
    var EMAIL_data = EMAIL.innerHTML;
    var UNAME_data = UNAME.innerHTML;
    var PASS_data = PASS.innerHTML;
    var LACTIVE_data = LACTIVE.innerHTML;

    ID.innerHTML =
        "<input type='text' id='ID_text" + rowNum + "' value='" + ID_data + "'>";
    FNAME.innerHTML =
        "<input type='text' id='FNAME_text" + rowNum + "' value='" + FNAME_data + "'>";
    LNAME.innerHTML =
        "<input type='text' id='LNAME_text" + rowNum + "' value='" + LNAME_data + "'>";
    ROLE.innerHTML =
        "<input type='text' id='ROLE_text" + rowNum + "' value='" + ROLE_data + "'>";
    ASSIGNEDMANAGER.innerHTML =
        "<input type='text' id='AM_text" + rowNum + "' value='" + ASSIGNEDMANAGER_data + "'>";
    PERMTYPE.innerHTML =
        "<input type='text' id='PERM_text" + rowNum + "' value='" + PERM_data + "'>";
    PNUM.innerHTML =
        "<input type='text' id='PNUM_text" + rowNum + "' value='" + PNUM_data + "'>";
    EMAIL.innerHTML =
        "<input type='text' id='EMAIL_text" + rowNum + "' value='" + EMAIL_data + "'>";
    UNAME.innerHTML =
        "<input type='text' id='UNAME_text" + rowNum + "' value='" + UNAME_data + "'>";
    PASS.innerHTML =
        "<input type='text' id='PASS_text" + rowNum + "' value='" + PASS_data + "'>";
    LACTIVE.innerHTML =
        "<input type='text' id='LACTIVE_text" + rowNum + "' value='" + LACTIVE_data + "'>";
}

function SubmitTableRow(rowNum) {
    var ID_value = document.getElementById("ID_text" + rowNum).value;
    var FNAME_value = document.getElementById("FNAME_text" + rowNum).value;
    var LNAME_value = document.getElementById("LNAME_text" + rowNum).value;
    var ROLE_value = document.getElementById("ROLE_text" + rowNum).value;
    var AM_value = document.getElementById("AM_text" + rowNum).value;
    var PERM_value = document.getElementById("PERM_text" + rowNum).value;
    var PNUM_value = document.getElementById("PNUM_text" + rowNum).value;
    var EMAIL_value = document.getElementById("EMAIL_text" + rowNum).value;
    var UNAME_value = document.getElementById("UNAME_text" + rowNum).value;
    var PASS_value = document.getElementById("PASS_text" + rowNum).value;
    var LACTIVE_value = document.getElementById("LACTIVE_text" + rowNum).value;

    document.getElementById("ID_row" + rowNum).innerHTML = ID_value;
    document.getElementById("FNAME_row" + rowNum).innerHTML = FNAME_value;
    document.getElementById("LNAME_row" + rowNum).innerHTML = LNAME_value;
    document.getElementById("ROLE_row" + rowNum).innerHTML = ROLE_value;
    document.getElementById("assignedManager_row" + rowNum).innerHTML = AM_value;
    document.getElementById("PERMTYPE_row" + rowNum).innerHTML = PERM_value;
    document.getElementById("PNUM_row" + rowNum).innerHTML = PNUM_value;
    document.getElementById("EMAIL_row" + rowNum).innerHTML = EMAIL_value;
    document.getElementById("UNAME_row" + rowNum).innerHTML = UNAME_value;
    document.getElementById("PASS_row" + rowNum).innerHTML = PASS_value;
    document.getElementById("LACTIVE_row" + rowNum).innerHTML = LACTIVE_value;

    // change back to edit button
    document.getElementById("edit_button" + rowNum).style.display = "block";
    document.getElementById("save_button" + rowNum).style.display = "none";
}

function AddTableRow() {
    var new_ID = document.getElementById("new_ID").value;
    var new_FNAME = document.getElementById("new_FNAME").value;
    var new_LNAME = document.getElementById("new_LNAME").value;
    var new_ROLE = document.getElementById("new_ROLE").value;
    var new_MGR = document.getElementById("new_MGR").value;
    var new_PERM = document.getElementById("new_PERM").value;
    var new_PNUM = document.getElementById("new_PNUM").value;
    var new_EMAIL = document.getElementById("new_EMAIL").value;
    var new_UNAME = document.getElementById("new_UNAME").value;
    var new_PASS = document.getElementById("new_PASS").value;
    var new_LACTIVE = document.getElementById("new_LACTIVE").value;


    var table = document.getElementById("userdata_table");
    var lengthOfTable = table.rows.length; //-1
    var row = (table.insertRow(lengthOfTable).outerHTML =
        "<tr id='row" + lengthOfTable + "'><td id='ID_row" + lengthOfTable + "'>" +
        new_ID + "</td><td id='FNAME_row" +
        lengthOfTable +
        "'>" +
        new_FNAME +
        "</td><td id='LNAME_row" +
        lengthOfTable +
        "'>" +
        new_LNAME +
        "</td><td id='ROLE_row" +
        lengthOfTable +
        "'>" +
        new_ROLE +
        "</td><td id='assignedManager_row" +
        lengthOfTable +
        "'>" +
        new_MGR +
        "</td><td id='PERMTYPE_row" +
        lengthOfTable +
        "'>" +
        new_PERM +
        "</td><td id='PNUM_row" +
        lengthOfTable +
        "'>" +
        new_PNUM +
        "</td><td id='EMAIL_row" +
        lengthOfTable +
        "'>" +
        new_EMAIL +
        "</td><td id='UNAME_row" +
        lengthOfTable +
        "'>" +
        new_UNAME +
        "</td><td id='PASS_row" +
        lengthOfTable +
        "'>" +
        new_PASS +
        "</td><td id='LACTIVE_row" +
        lengthOfTable +
        "'>" +
        new_LACTIVE +
        "</td><td><input type='button' id='edit_button" +
        lengthOfTable +
        "' value='Edit' class='edit' onclick='EditTableRow(" +
        lengthOfTable +
        ")'> <input type='button' id='save_button" +
        lengthOfTable +
        "' value='Save' class='save' onclick='SubmitTableRow(" +
        lengthOfTable +
        ")'> <input type='button' value='Delete' class='delete' onclick='DeleteTableRow(" + lengthOfTable + ")'></td></tr>");

    document.getElementById("new_ID").value = "";
    document.getElementById("new_FNAME").value = "";
    document.getElementById("new_LNAME").value = "";
    document.getElementById("new_ROLE").value = "";
    document.getElementById("new_MGR").value = "";
    document.getElementById("new_PERM").value = "";
    document.getElementById("new_PNUM").value = "";
    document.getElementById("new_EMAIL").value = "";
    document.getElementById("new_UNAME").value = "";
    document.getElementById("new_PASS").value = "";
    document.getElementById("new_LACTIVE").value = "";
}