for (var i = 1; i < 6; i++) {
    $(`#timePickerStart${i}`).timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        width: 150,
        minTime: '9',
        maxTime: '6:00pm',
        defaultTime: '09',
        dynamic: false,
        dropdown: true,
        scrollbar: true,

    });
}

for (var i = 1; i < 6; i++) {
    $(`#timePickerEnd${i}`).timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '9',
        maxTime: '6:00pm',
        defaultTime: '18',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
}

window.onload = function() {
    compareTime();
}

function compareTime() {
    for (var i = 1; i < 6; i++) {
        var timePickerEnd = document.getElementById(`timePickerEnd${i}`).value;
        var timePickerStart = document.getElementById(`timePickerStart${i}`).value;
        var lunch = document.getElementById(`lunch${i}`).value;
        var diff = (new Date("1970-1-1 " + timePickerEnd) - (new Date("1970-1-1 " + timePickerStart)));
        var duration = (diff / 1000 / 60 / 60) - lunch;
        var rate = parseInt(document.getElementById("hourlyrate").value);
        document.getElementById(`duration${i}`).value = duration;
        document.getElementById(`DayPay${i}`).value = duration * rate;
    }
    window.setInterval(compareTime, 5000);
}

function addNewProject() {
    for (var i = 1; i < 6; i++) {
        var enteredProject = document.getElementById("NewProject").value;
        console.log(enteredProject);
        var selectList = document.getElementById(`Projects-List${i}`);
        var option = document.createElement("option");
        option.value = enteredProject;
        option.text = enteredProject;
        selectList.appendChild(option);
    }
    document.getElementById("NewProject").value = "";
}

function addNewTask() {
    for (var i = 1; i < 6; i++) {
        var enteredTask = document.getElementById("NewTask").value;
        var selectList = document.getElementById(`Tasks-List${i}`);
        var option = document.createElement("option");
        option.value = enteredTask;
        option.text = enteredTask;
        selectList.appendChild(option);
    }
    document.getElementById("NewTask").value = "";
}

function calcTotal() {
    var contractedhours = document.getElementById("contracthours").value;
    var rate = parseInt(document.getElementById("hourlyrate").value);
    var day1Value = parseInt(document.getElementById("duration1").value);
    var day2Value = parseInt(document.getElementById("duration2").value);
    var day3Value = parseInt(document.getElementById("duration3").value);
    var day4Value = parseInt(document.getElementById("duration4").value);
    var day5Value = parseInt(document.getElementById("duration5").value);
    var tot = day1Value + day2Value + day3Value + day4Value + day5Value;
    var totpay = tot * rate;
    document.getElementById("totalFigure").innerHTML = ('Hour(s): ' + tot + ' (' + contractedhours + ' contracted hours)');
    document.getElementById("sub-text-totalFigure").innerHTML = 'Weekly Pay: ' + (totpay) + '.00 (' + rate + '.00 rate)';
}

function exportTimesheet() {
    var empID = document.getElementById("EmpID").value;
    var STR = empID.toString();
    html2canvas(document.querySelector("#capture"), {
        allowTaint: true,
        useCORS: true,
        scale: 1
    }).then(canvas => {
        var TimesheetImage = canvas.toDataURL("Image/png");
        var newDoc = new jsPDF('l');
        newDoc.addImage(TimesheetImage, 'PNG', 7, 13, 150, 150)
        newDoc.save('timesheet' + '- EmployeeID:' + STR)
    })
}

$('button.printPage').click(function() {
    window.print();
    return false;
});


$(document).ready(function() {
    $(function() {
        $('#datePickerWB').datepicker({
            firstDay: 1,
            dateFormat: 'dd-mm-yy',
            beforeShowDay: function(date) {
                var day = date.getDay();
                return [(day == 1), ""];
            },
            onSelect: addDatesToTimesheet
        });

    })
});

function addDatesToTimesheet() {
    let chosenDate = $('#datePickerWB').datepicker('getDate');
    day1 = new Date(chosenDate); //create date object

    var day2 = new Date(day1);
    day2.setDate(day2.getDate() + 1);

    var day3 = new Date(day2);
    day3.setDate(day3.getDate() + 1);

    var day4 = new Date(day3);
    day4.setDate(day4.getDate() + 1);

    var day5 = new Date(day4);
    day5.setDate(day5.getDate() + 1);

    let R1 = document.getElementById("Row1-date");
    R1.innerHTML = (`${day1.getDate()}/${day1.getMonth() + 1}/${day1.getFullYear()}`);
    let R2 = document.getElementById("Row2-date");
    R2.innerHTML = (`${day2.getDate()}/${day2.getMonth() + 1}/${day2.getFullYear()}`);
    let R3 = document.getElementById("Row3-date");
    R3.innerHTML = (`${day3.getDate()}/${day3.getMonth() + 1}/${day3.getFullYear()}`);
    let R4 = document.getElementById("Row4-date");
    R4.innerHTML = (`${day4.getDate()}/${day4.getMonth() + 1}/${day4.getFullYear()}`);
    let R5 = document.getElementById("Row5-date");
    R5.innerHTML = (`${day5.getDate()}/${day5.getMonth() + 1}/${day5.getFullYear()}`);
}