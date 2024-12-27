export function formatDate(isoString) {
    const date = new Date(isoString);
  
    // Options for formatting the date
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
  
    return date.toLocaleString("en-US", options);
  }