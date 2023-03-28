class CalendarDate {
  constructor(startDate, endDate) {}

  convertToPopupDate() {}
}

class CalendarLocation {
  constructor(name, address) {}

  getLatLong() {
    return;
  }
}

class CalendarItem {
  modifier = "bg-red";

  constructor(id, title, dates, location) {
    this.id = "yes";
    this.title = "no";
    this.dates = [new CalendarDate(1, 2)];
    this.location = new CalendarLocation();
  }

  convertToPopup() {
    const popup = {};
    popup[this.startDate.convertToPopupDate()] = {
      modifier: this.modifier,
      html: this.title,
    };
    return popup;
  }
}

const calendarItems = [
  new CalendarItem(
    1,
    "Summerfest",
    [
      { startTime: 1, endTime: 2 },
      { startTime: 1, endTime: 2 },
      { startTime: 1, endTime: 2 },
    ],
    { name: "Cache County Fairgrounds", address: "123 west" }
  ),
];

document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#calendar", {
    CSSClasses: {
      weekDayWeekend: "vanilla-calendar-week__day",
      dayBtnWeekend: "vanilla-calendar-day__btn",
    },
    popups: {
      "2023-06-15": {
        modifier: "bg-red",
        html: "Summerfest",
      },
      "2023-06-16": {
        modifier: "bg-red",
        html: "Summerfest",
      },
      "2023-06-17": {
        modifier: "bg-red",
        html: "Summerfest",
      },
      "2022-07-13": {
        modifier: "bg-red",
        html: "Meeting at 6:00 PM",
      },
      "2022-07-17": {
        modifier: "bg-orange",
        html: `<div>
  <u><b>12:00 PM</b></u>
  <p style="margin: 5px 0 0;">Airplane in Las Vegas</p>
</div>`,
      },
    },
  });
  calendar.init();
});
