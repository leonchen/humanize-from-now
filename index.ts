// moment fromNow() like humanized duration, see
// http://momentjs.com/docs/#/displaying/fromnow/

const MS = 1 / 1000;
const SECOND = 1;
const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const MONTH = DAY * 30.5;
const YEAR = MONTH * 12;

const AS_JUST_NOW = 3 * SECOND;
const AS_SECONDS = 44 * SECOND;
const AS_A_MINUTE = 89 * SECOND;
const AS_MINUTES = 44 * MINUTE;
const AS_AN_HOUR = 89 * MINUTE;
const AS_HOURS = 21 * HOUR;
const AS_A_DAY = 35 * HOUR;
const AS_DAYS = 25 * DAY;
const AS_A_MONTH = 45 * DAY;
const AS_MONTHS = 319 * DAY;
const AS_A_YEAR = 547 * DAY;

export default function(time: number | string | Date, failover: string = 'N/A'): string {
  const t = typeof time !== 'number' ? new Date(time).getTime() : time;
  if (isNaN(t)) return failover;
  const now = Date.now();
  const diff = (now - t) * MS;

  if (diff < 0) return failover;
  if (diff < AS_JUST_NOW) return 'just now';
  if (diff < AS_SECONDS) return 'a few seconds ago';
  if (diff < AS_A_MINUTE) return 'a minute ago';
  if (diff < AS_MINUTES) return `${Math.ceil(diff / MINUTE)} minutes ago`;
  if (diff < AS_AN_HOUR) return 'an hour ago';
  if (diff < AS_HOURS) return `${Math.ceil(diff / HOUR)} hours ago`;
  if (diff < AS_A_DAY) return 'a day ago';
  if (diff < AS_DAYS) return `${Math.ceil(diff / DAY)} days ago`;
  if (diff < AS_A_MONTH) return 'a month ago';
  if (diff < AS_MONTHS) return `${Math.ceil(diff / MONTH)} months ago`;
  if (diff < AS_A_YEAR) return 'a year ago';
  return `${Math.ceil(diff / YEAR)} years ago`;
}
