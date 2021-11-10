// need to include the date and time
// moment().format('dddd'); 
var todayDate = moment().format('dddd,MMM Do YYYY');
$("currentDay").html(todayDate);

var saveButton= $("#save-btn");

    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        console.log(currentTime)
    $("#currentDay").text(currentTime);
    var currentHour= moment().format('dddd'); 

var workHours =[9,10,11,12,13,14,15,16,17]

var currentMilitaryTime = moment().format('HH');

// schedule work hours blocks
function displayBlock(){
    var time = 9;
    console.log(`comparing ${time} to ${currentMilitaryTime}`)
    if (time < currentMilitaryTime) {
        console.log("time is less than currenttime")
        $(".notes").addClass("past");
    } else {
        console.log("time is NOT less than currentTime")
    }
}

displayBlock();




