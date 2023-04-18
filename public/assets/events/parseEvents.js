const fs = require("fs");

const file = "events.txt";

const allFileContents = fs.readFileSync(file, "utf-8");

const lines = allFileContents.split(/\r?\n/);

const items = [];

// let newItem = {date:, title, time:, location:, address}
// id:, title:,  dates: [{startDate, endDate}] , location: {name:, latitutde:, longitude:, address:} // maybe just need address
// https://www.explorelogan.com/calendar.html
// 31
// MAR
// Shawn Colvin
// Fri, 7 – 11 PM
// Cache Valley Center For the Arts, 43 S Main St
// Logan, UT
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (i % 6 == 0) {
  }
}
