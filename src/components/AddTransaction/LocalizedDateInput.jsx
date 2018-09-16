import React from "react";
import { DateInput } from "@blueprintjs/datetime";
import Localization from "../../utils/Localization";

const dateFormatter = {
  formatDate: date => date.toLocaleDateString("pl-PL"),
  parseDate: str => new Date(str),
  placeholder: "D/M/YYYY"
};

const localeUtils = {
  formatDay: date => Localization.weekdaysLong[date.getDay()],
  formatMonthTitle: date => Localization.months[date.getMonth()],
  formatWeekdayLong: i => Localization.weekdaysLong[i],
  formatWeekdayShort: i => Localization.weekdaysShort[i],
  getFirstDayOfWeek: () => 1,
  getMonths: () => Localization.months
};

const LocalizedDateInput = props => (
  <DateInput {...dateFormatter} localeUtils={localeUtils} {...props} />
);

export default LocalizedDateInput;
