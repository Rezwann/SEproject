/* Login Page Date and Time */

// Adding zero wherever hour, minutes or seconds are below 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function displayTime() {
    var currentDay = new Date();
    var hour = currentDay.getHours();
    var minutes = currentDay.getMinutes();
    var seconds = currentDay.getSeconds();
    timePeriod = (hour < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hour = (hour == 0) ? 12 : hour; // hour should be 12 if 0
    hour = (hour > 12) ? hour - 12 : hour; // 12 hour clock

    hour = checkTime(hour);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById("login-page-clock").innerHTML = hour + ":" + minutes + ":" + seconds + " " + timePeriod;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var DayOfWeek = days[currentDay.getDay()];
    var DayDate = currentDay.getDate();
    var Month = months[currentDay.getMonth()];
    var Year = currentDay.getFullYear();
    var date = DayOfWeek + ", " + DayDate + " " + Month + " " + Year;
    document.getElementById("login-page-date").innerHTML = date;

    var time = setTimeout(function() { displayTime() }, 500); // always show latest time 
}

/* Account Objects */
var ObjectUsersTS = [

    {
        username: "admin",
        password: "admin"
    },
    {
        username: "consultant",
        password: "consultant"
    },
    {
        username: "linemanager",
        password: "linemanager"
    },
    {
        username: "financeteam",
        password: "financeteam"
    }

]

function checkCredentials() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (var i = 0; i < ObjectUsersTS.length; i++) {
        // compare entered username and password to object in ObjectUsersTS array
        if (username == ObjectUsersTS[i].username && password == ObjectUsersTS[i].password) {
            alert(username + " has logged in.")
            if (username == 'admin') {
                location.replace("./adminDashboard.html")
            } else if (username == 'linemanager') {
                location.replace("./manage.html");
            } else {
                location.replace("./timesheet.html")
            }
            return
        }
    }
    alert("Account does not exist, check username and password.")

    if (username.length == 0) {
        alert('You must not leave username empty.');

    }
    if (password.length == 0) {
        alert('You must not leave password empty.');
    }
}

function createAccount() {
    var newAccountUsername = document.getElementById("newUsername").value
    var newAccountPassword = document.getElementById("newPassword").value
    newMember = {
        username: newAccountUsername,
        password: newAccountPassword
    }

    for (var i = 0; i < ObjectUsersTS.length; i++) {
        if (newAccountUsername == ObjectUsersTS[i].username) {
            alert("That username already exists.")
            return
        } else if (newAccountPassword.length == 0) {
            alert("You must provide a password for your account.")
            return
        }
    }
    alert("Account created.")
        // push new object to the people array
    ObjectUsersTS.push(newMember)
}