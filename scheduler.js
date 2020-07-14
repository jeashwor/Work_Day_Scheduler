// Add Document.ready function to make sure all scripts and page have loaded prior to running this file. 
// Create Global Variables for access to HTML file.
var currentDayEl = $("#currentDay");
var containerEl = $(".container");

// Create Global Variables for function reference
var toDoItems = [];
var toDoHour = "";

// Creates variables using moment().
var today = moment().format("dddd, MMMM Do");
var hours24 = moment().format("H");

// Get stored ToDoItems if they exist in local storage
var storedToDoItems = JSON.parse(localStorage.getItem("ToDoItems"));

// Check Storage and re-write current toDoItems list if present. 
if (storedToDoItems !== null) {
    toDoItems = storedToDoItems;
} else {
    toDoItems = ["", "", "", "", "Eat Lunch", "", "", "", "", ""];
};

// Begin Creating rows with times by hour , form field, and save button. 
for (var time = 8; time < 18; time++) {
    var i = time - 8;
    var timeSlot = $("<div>");
    timeSlot.addClass("row time-block");
    timeSlot.attr("time-slot", (time - 8));
    var timeBlock = $("<div>");
    timeBlock.addClass("col-md-2 hour");
    setTimeDisplay(time);
    timeBlock.text(toDoHour);
    var description = $("<textarea>");
    description.addClass("col-md-9 description")
    description.attr("id", i);
    description.attr("type", "text");
    description.text(toDoItems[i]);
    var saveBlock = $("<div>");
    saveBlock.addClass("col-md-1 saveBtn far fa-save");
    saveBlock.attr("id", i);

    rowColor(time, hours24);

    timeSlot.append(timeBlock);
    timeSlot.append(description);
    timeSlot.append(saveBlock);
    containerEl.append(timeSlot);

};








// Function to set AM vs PM on calendar hour.  
function setTimeDisplay(time) {
    if (time <= 12) {
        toDoHour = time + "am";
    } else {
        toDoHour = (time - 12) + "pm";
    }
};

// Function to set row color.
function rowColor() {
    if (time == hours24) {
        description.addClass("present");
    } else if (time < hours24) {
        description.addClass("past");
    } else {
        description.addClass("future");
    };
};





currentDayEl.text(today);











