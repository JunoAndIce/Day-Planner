//DayJS Section
var timeText = $('#1a');

function displayTime(){
  var reformatDate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
  timeText.text(reformatDate);
}

setInterval(displayTime, 1000);



//loop through table and add button to the end of each row on the table
let tr = document.querySelectorAll("table tbody tr");

Array.from(tr).forEach(function(trArray) {

    let button = document.createElement("button");
    let td = document.createElement("td");

    button.className = "fa-solid fa-save btn";
    td.className = "btn_cont";

    td.append(button);
    trArray.append(td);
});



$(".btn").click(function(event){

  var value =  $(this).closest("tr").find('.text').val();
  var key = $(this).closest("tr").attr('id').split('-')[1];

  // console.log("Button pressed");
  // console.log(key + ' ' + value);
  // Save to local storage
  localStorage.setItem(key, value);

})

$('.time-block').each (function(index) {
  //.attr('id').split('-')[1];
  // get the specific ID of the time block and check with the current time 

  var timeSection = $(this).attr('id').split('-')[1];
  var currentTime = dayjs().format('H');
  
  console.log(timeSection + ' ' + currentTime);


  if (timeSection === currentTime)
  {
    $(this).find('.text').addClass("present");
  }
  else if (timeSection > currentTime)
  {
    $(this).find('.text').addClass("future");
  } 
  else if (timeSection < currentTime)
  {
    $(this).find('.text').addClass("past");
  } 
  
  // Local Storage Get
  var savedEvent = localStorage.getItem(timeSection);

  if (savedEvent) {
    $(this).find('.text').val(savedEvent);
  }
});

