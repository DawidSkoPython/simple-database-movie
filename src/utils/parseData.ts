const defaultFormatOptions = {
  month: "long",
  year: "numeric",
  day: "numeric",
};

function parseDate(date: string, formatOptions: any = defaultFormatOptions) {
  return new Date(date).toLocaleString("en-us", formatOptions);
}

export default parseDate;
