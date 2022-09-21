const timeBlocks = document.querySelectorAll("textarea")


var time = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(time);

function assessTimeBlocks() {
    let startTime = 9
const currentHour = moment().hour();


timeBlocks.forEach(timeBlock => {
    if(currentHour === startTime) {timeBlock.classList.add('present')}
    if(currentHour < startTime) {timeBlock.classList.add('future')}
    if(currentHour > startTime) {timeBlock.classList.add('past')}
    startTime ++
})
}
function saveNote() {

}
$(".saveBtn").click(saveNote);

assessTimeBlocks()