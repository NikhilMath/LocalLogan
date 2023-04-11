const calendarItems = [
  {
    id: 1,
    title: "Summerfest",
    dates: [{ date: "2023-06-15", startTime: "9:00", endTime: "21:00" }],
    location: {
      name: "Tabernacle",
      address: "666 W 350 S Logan UT 84321",
    },
  },
  {
    id: 2,
    title: "Summerfest",
    dates: [{ date: "2023-05-15", startTime: "9:00", endTime: "21:00" }],
    location: {
      name: "Tabernacle",
      address: "666 W 350 S Logan UT 84321",
    },
  },
  {
    id: 3,
    title: "Summerfest",
    dates: [{ date: "2023-06-14", startTime: "9:00", endTime: "21:00" }],
    location: {
      name: "Tabernacle",
      address: "666 W 350 S Logan UT 84321",
    },
  },
  {
    id: 4,
    title: "Summerfest",
    dates: [{ date: "2023-03-29", startTime: "9:00", endTime: "21:00" }],
    location: {
      name: "Tabernacle",
      address: "666 W 350 S Logan UT 84321",
    },
  },
  {
    id: 5,
    title: "Nikhils birthday",
    dates: [{ date: "2023-04-04", startTime: "9:00", endTime: "21:00" }],
    location: {
      name: "Tabernacle",
      address: "666 W 350 S Logan UT 84321",
    },
  },
];

const formPopups = (items) => {
  const popups = {};
  items.forEach((item) => {
    item.dates.forEach((date) => {
      popups[date.date] = {
        modifier: "bg-red",
        html: `<b>${item.title}</b>
              <div>${date.startTime} - ${date.endTime}</div>
              <div>${item.location.name}</div>
              <div>${item.location.address}</div>`,
      };
    });
  });
  return popups;
};

const popups = formPopups(calendarItems);

document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#calendar", {
    CSSClasses: {
      weekDayWeekend: "vanilla-calendar-week__day",
      dayBtnWeekend: "vanilla-calendar-day__btn",
    },
    popups,
    //     {
    //       "2023-06-15": {
    //         modifier: "bg-red",
    //         html: "Summerfest",
    //       },
    //       "2023-06-16": {
    //         modifier: "bg-red",
    //         html: "Summerfest",
    //       },
    //       "2023-06-17": {
    //         modifier: "bg-red",
    //         html: "Summerfest",
    //       },
    //       "2022-07-13": {
    //         modifier: "bg-red",
    //         html: "Meeting at 6:00 PM",
    //       },
    //       "2022-07-17": {
    //         modifier: "bg-orange",
    //         html: `<div>
    //   <u><b>12:00 PM</b></u>
    //   <p style="margin: 5px 0 0;">Airplane in Las Vegas</p>
    // </div>`,
    //       },
    //     },
  });
  calendar.init();
});
