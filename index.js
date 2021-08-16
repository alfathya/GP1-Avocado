const dateToday = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  let day = days[today.getDay()];
  let dd = today.getDate();
  let mm = months[today.getMonth()];
  let yyyy = today.getFullYear();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  today = `${day}, ${dd} ${mm} ${yyyy}`;

  return today;
};

const getTime = () => {
  let time = "";
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let AmPm = "";

  if (hour >= 12) {
    AmPm = "PM";
  } else {
    AmPm = "AM";
  }

  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;

  return (time = `${hour} : ${minute} ${AmPm}`);
};

console.log(dateToday());
console.log(getTime());
