const ABRVMONTHS = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

const WEEKDAYS = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};


//2018-02-16
//16feb
export const dateToDayMonth = (date) => {
  const day = date.slice(8,10);
  const month = date.slice(5,7);
  return day + ABRVMONTHS[month];
};


//2018-02-16
//Friday, February 16, 2018
export const dateToWordDate = (date) => {
  const dateObj = new Date(date);
  let day = WEEKDAYS[dateObj.getDay()];
  let month = MONTHS[dateObj.getMonth()];
  return `${day}, ${month} ${date.slice(8,10)}, ${date.slice(0,4)}`;
};
