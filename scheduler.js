// Create Global Variables for access to HTML file.
var currentDayEl = $("#currentDay");
var containerEl = $(".container");

// Create Global Variables for function reference
var toDoItems = [];
var toDoHour = "";
var i = 0;

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

// Display Current Day on page.
currentDayEl.text(today);

// Begin Creating rows with times by hour , form field, and save button. 
for (var time = 8; time < 18; time++) {
    var i = time - 8;
    // create div for rows.
    var timeSlot = $("<div>");
    timeSlot.addClass("row time-block");
    timeSlot.attr("time-slot", (time - 8));
    // create dive for time display.
    var timeBlock = $("<div>");
    timeBlock.addClass("col-sm-1 hour");
    setTimeDisplay(time);
    timeBlock.text(toDoHour);
    // Create text area for input field to be saved. 
    var description = $("<textarea>");
    description.addClass("col-sm-10 description")
    description.attr("id", i);
    description.attr("type", "text");
    description.text(toDoItems[i]);
    // Create save icon area.
    var saveBlock = $("<div>");
    saveBlock.addClass("col-sm-1 saveBtn");
    var saveSymbol = $("<i>");
    saveSymbol.addClass("far fa-save");
    saveSymbol.attr("save-id", i);
    saveBlock.append(saveSymbol);
    // call function to set row color.
    rowColor(time, hours24);
    // Append added divs to timeSlot.
    timeSlot.append(timeBlock, description, saveBlock);
    timeSlot.append(description);
    timeSlot.append(saveBlock);
    // Append timeSlot elements to ContainerEl.
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

// Add click event to save element to local storage. 
$("i").on("click", function (event) {
    event.preventDefault();
    var j = $(this).attr("save-id");
    var descriptionToSave = $("#" + j).val();
    toDoItems[j] = descriptionToSave;
    localStorage.setItem("ToDoItems", JSON.stringify(toDoItems));
})














