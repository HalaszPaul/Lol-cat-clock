const wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

// Getting it to show the current time on the page

const showCurrentTime = function() {
  // display the string on the webpage

const clock = document.querySelector("#clock");

let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds(); 
let meridian = "AM";

  // set hours

  if(hours >= noon) {
    meridian = "PM";
  }

  if(hours > noon) {
    hours = hours - 12;
  }

  // set minutes

  if(minutes < 10) {
    minutes = "0" + minutes;
  }

  // set seconds

  if(seconds < 10) {
    seconds = "0" + seconds;
  }
  //put together the string that displays the time
const clockTime = hours + ':' + minutes + ':' +
    seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures

const updateClock = function() {

let time = new Date().getHours();
  let messageText;
  let image = "images/pisicuta.jpg";

const timeEventJS = document.querySelector("#timeEvent");
const lolcatImageJS = document.querySelector("#lolcatImage");

  if(time == partytime) {
    image = "images/pisiparty.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime) {
    image = "images/pisimorning.jpg";
    messageText = "Wake Up!";
  }
  else if (time == lunchtime) {
    image = "images/pisilunch.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime) {
    image = "images/pisinap.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon) {
    image = "images/pisimorning.jpg";
    messageText = "Good Morning!";
  }
  else if (time >= evening) {
    image = "images/pisisleep.jpg";
    messageText = "Good Evening!";
  }
  else {
    image = "images/pisicuta.jpg";
    messageText = "Good Afternoon!";
  }
  console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second

const oneSecond = 1000;
setInterval(updateClock, oneSecond);


// getting the party time button to work
const partyTimeButton = document.querySelector("#partyTimeButton");

const partyEvent = function() {
  if(partytime < 0) {
    partytime = new Date().getHours();
    partyTimeButton.innerText = "Party Over!";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
  }
  else {
    partytime = -1;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#222";
  }
};

partyTimeButton.addEventListener("click", partyEvent);
partyEvent();

// activates wake up selector
const wakeUpTimeSelector = document.querySelector("#wakeUpTimeSelector");

const wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// activates lunch selector

const lunchTimeSelector = document.querySelector("#lunchTimeSelector");
const lunchEvent = function () {
  lunchtime = lunchTimeSelector.value;
  
};
lunchTimeSelector.addEventListener("change", lunchEvent);


// activates nap time selector
const napTimeSelector = document.querySelector("#napTimeSelector");
const napEvent = function() {
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

