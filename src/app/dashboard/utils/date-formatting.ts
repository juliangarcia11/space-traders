const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// given a date like "2024-09-06T20:29:58.291Z", return a string like "Sep 6 - 8:29 PM"
export function formatDate(date: string) {
  const d = new Date(date);
  const month = months[d.getMonth()];
  const day = d.getDate();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  return `${month} ${day} - ${hours % 12}:${minutes.toString().padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
}
