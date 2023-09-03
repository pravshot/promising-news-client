const convertToISOFormat = (date) => {
  return date.toLocaleString("sv").replace(" ", "T").split("T")[0];
};
// function to get date x days ago
const getDateXDaysAgo = (daysAgo, date = new Date()) => {
  const oldDate = new Date(date.getTime());
  oldDate.setDate(date.getDate() - daysAgo);
  return oldDate;
};

export default function formatTimePeriodToDate(timePeriod) {
  return convertToISOFormat(getDateXDaysAgo(timePeriod));
}
