import { format, getTime, formatDistanceToNow } from "date-fns";

export function fDate(date) {
  return format(new Date(date), "dd MMMM yyyy");
}

export function fDateTime(date) {
  return format(new Date(date), "dd MMMM yyyy HH:mm");
}

export function fTimestamp(date) {
  return format(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), "dd MMMM yyyy hh:mm p");
}

export function fToNow(date) {
  return format(new Date(date), {
    addSuffix: true
  });
}
