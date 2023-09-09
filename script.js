const currentDayText = document.querySelector("#CurrentDayOfTheWeek");
const CurrentUTCTime = document.getElementById("CurrentUTCTime");
const date = new Date();

const generateCurrentDate = () => {
    const daysOfTheWeek = [

    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];

    const dayIndex = date.getDay();
    const currentDay = daysOfTheWeek[dayIndex];
    currentDayText.innerText = currentDay;
};

const generateUTCTime = () => {
    const date = new Date();
    const utcTimeMilliseconds = date.getTime();
    CurrentUTCTime.textContent = utcTimeMilliseconds;
  };
  
  generateCurrentDate();
  generateUTCTime();
  setInterval(generateUTCTime, 1000);
  