function dateSuffix(dateNumber) {
  let suffix;
  if (dateNumber === 11 || dateNumber === 12 || dateNumber === 13) {
    suffix = 'th';
  } else if (String(dateNumber).slice(-1) === 1) {
    suffix = 'st';
  } else if (String(dateNumber).slice(-1) === 2) {
    suffix = 'nd';
  } else if (String(dateNumber).slice(-1) === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return suffix;
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  let dateVal = date.getDate();
  let suffix = dateSuffix(date);

  console.log(`Today's date is ${day}, ${month} ${dateVal}${suffix}.`);
}

let today = new Date();
formattedDate(today);

console.log(today.getFullYear()); // 2020
console.log(today.getYear()); // 120

console.log(today.getTime()); // 1600809479857

let tomorrow = new Date(today.getTime());
tomorrow.setDate(23);
formattedDate(tomorrow);

let nextWeek = new Date(today.getTime());
console.log(today === nextWeek);

console.log(today.toDateString() === nextWeek.toDateString());
nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
