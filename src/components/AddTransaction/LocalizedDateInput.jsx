import React from "react";
import { DateInput } from "@blueprintjs/datetime";

const MONTHS = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Październik",
  "Listopad",
  "Grudzień"
];

const WEEKDAYS_LONG = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota"
];

const WEEKDAYS_SHORT = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"];

const dateFormatter = {
  formatDate: date => date.toLocaleDateString("pl-PL"),
  parseDate: str => new Date(str),
  placeholder: "D/M/YYYY"
};

const localeUtils = {
  formatDay: date => WEEKDAYS_LONG[date.getDay()],
  formatMonthTitle: date => MONTHS[date.getMonth()],
  formatWeekdayLong: i => WEEKDAYS_LONG[i],
  formatWeekdayShort: i => WEEKDAYS_SHORT[i],
  getFirstDayOfWeek: () => 1,
  getMonths: () => MONTHS
};

const LocalizedDateInput = props => (
  <DateInput {...dateFormatter} localeUtils={localeUtils} {...props} />
);

export default LocalizedDateInput;
