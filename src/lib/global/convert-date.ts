export const getDate = (date: string) => {
  const formatedDate = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });

  return formatedDate;

  // Aug 17
};

export const getDateTimeZone = (date: string) => {
  const formatedDate = new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "IST",
  });
  return formatedDate;

  // Aug 17, 1:43 AM GMT+5:30
};

export const getDateTime = (date: string) => {
  const formatedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "IST",
    timeZoneName: "short",
  });
  return formatedDate;

  // AUG 17, 2023, 6:19 PM GMT+5:30
};
