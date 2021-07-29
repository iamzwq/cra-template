import dayjs from "dayjs";

type FORMAT =
  | "HH:mm"
  | "YYYY-MM-DD"
  | "YYYY-MM-DD HH:mm"
  | "YYYY-MM-DD HH:mm:ss";

export const dateFormat = (date: string | number | Date, format: FORMAT) =>
  dayjs(date).format(format);
