var timeText = $('#1a');


function displayTime(){
  var reformatDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  timeText.text(reformatDate);
}

setInterval(displayTime, 1000);

//loop through table and add button to the table
let tr = document.querySelectorAll("table tbody tr");

Array.from(tr).forEach(function(trArray) {
    let button = document.createElement("button");
    let td = document.createElement("td");
    button.className = "fa-solid fa-save";
    td.append(button);
    trArray.append(td);
});

