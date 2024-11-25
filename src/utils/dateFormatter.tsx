
const parseIsoDate = (isoDate: string): string => {
    const dateObj = new Date(isoDate);

    if (isNaN(dateObj.getTime())) {
      throw new Error("Invalid date format");
    }

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return dateObj.toLocaleDateString("en-US", options);
  }

export default parseIsoDate;