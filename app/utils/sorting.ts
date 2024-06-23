interface T {
  [key: string]: any;
}
export const sortData = (
  key: string,
  data: T[],
  sortConfig: { key: string; value: "asc" | "desc" }
): T[] => {
  let latestSort: T[] = [];
  if (typeof data[0][key] === "number")
    latestSort = data.sort((a, b) => {
      if (sortConfig.value === "asc") return a[key] - b[key];
      else if (sortConfig.value === "desc") return b[key] - a[key];
      return 0;
    });
  else if (typeof data[0][key] === "string") {
    latestSort = data.sort((a, b) => {
      if (sortConfig.value === "asc") return a[key].localeCompare(b[key]);
      else if (sortConfig.value === "desc") return b[key].localeCompare(a[key]);
      return 0;
    });
  } else if (data[0][key] instanceof Date) {
    latestSort = data.sort((a, b) => {
      if (sortConfig.value === "asc")
        return a[key].getTime() - b[key].getTime();
      else if (sortConfig.value === "desc")
        return b[key].getTime() - a[key].getTime();
      return 0;
    });
  }

  return latestSort;
};
