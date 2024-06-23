import { arrondissementMap } from "./preprocessData";

export const createUrl = (url: string, queries: string[]) => {
  const andQuery =
    queries.length > 0 && queries.map((param) => `${param}`).join(" and ");
  return andQuery ? `${url}?${andQuery}` : url;
};

export const createQuery = (type: string, value: string[]) => {
  const query = value.length
    ? value.map((param) => `${type} like "${param}"`).join(" or ")
    : "";
  return query;
};

export const fontaineAdapterQuery = (query: string) => {
  return query
    .replace("arrondissement", "commune")
    .replace("type", "type_objet")
    .replace("adresse", "voie")
    .replace("nom", "modele");
};

export function formatArrondissementFontaine(
  arrondissementNumber: string
): string {
  for (const [key, value] of Object.entries(arrondissementMap)) {
    if (value === arrondissementNumber) {
      return key;
    }
  }
  return "";
}
