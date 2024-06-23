export const createUrl = (url: string, or: string[], and: string[]) => {
  const orQuery = or.length > 0 && or.map((param) => `"${param}"`).join(" or ");
  const andQuery =
    and.length > 0 && and.map((param) => `"${param}"`).join(" and ");
  return orQuery && andQuery
    ? `${url}?${orQuery}&${andQuery}`
    : orQuery
    ? `${url}?${orQuery}`
    : andQuery
    ? `${url}?${andQuery}`
    : url;
};
