const timeBlocks = document.querySelectorAll("textarea");

var time = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(time);
function assessTimeBlocks() {
  let startTime = 9;

  const currentHour = moment().hour();

  timeBlocks.forEach((timeBlock) => {
    if (currentHour === startTime) {
      timeBlock.classList.add("present");
    }
    if (currentHour < startTime) {
      timeBlock.classList.add("future");
    }
    if (currentHour > startTime) {
      timeBlock.classList.add("past");
    }
    startTime++;
  });
}
function saveNote() {
  var siblings = $(this).siblings();
  var text = siblings[1].value;
  var timeBlockId = siblings[1].getAttribute("id");
  localStorage.setItem(timeBlockId, text);
}
for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(key, value);
  }
$(".saveBtn").click(saveNote);

assessTimeBlocks();