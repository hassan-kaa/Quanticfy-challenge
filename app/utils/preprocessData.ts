import { Fontaine } from "./types";

const arrondissementMap = {
  "PARIS 1ER ARRONDISSEMENT": "75001",
  "PARIS 2EME ARRONDISSEMENT": "75002",
  "PARIS 3EME ARRONDISSEMENT": "75003",
  "PARIS 4EME ARRONDISSEMENT": "75004",
  "PARIS 5EME ARRONDISSEMENT": "75005",
  "PARIS 6EME ARRONDISSEMENT": "75006",
  "PARIS 7EME ARRONDISSEMENT": "75007",
  "PARIS 8EME ARRONDISSEMENT": "75008",
  "PARIS 9EME ARRONDISSEMENT": "75009",
  "PARIS 10EME ARRONDISSEMENT": "75010",
  "PARIS 11EME ARRONDISSEMENT": "75011",
  "PARIS 12EME ARRONDISSEMENT": "75012",
  "PARIS 13EME ARRONDISSEMENT": "75013",
  "PARIS 14EME ARRONDISSEMENT": "75014",
  "PARIS 15EME ARRONDISSEMENT": "75015",
  "PARIS 16EME ARRONDISSEMENT": "75016",
  "PARIS 17EME ARRONDISSEMENT": "75017",
  "PARIS 18EME ARRONDISSEMENT": "75018",
  "PARIS 19EME ARRONDISSEMENT": "75019",
  "PARIS 20EME ARRONDISSEMENT": "75020",
};

export const renameProperties = (data: Fontaine[], propertyMap: any) => {
  return data.map((item) => {
    const newItem = {};
    for (const [oldProp, newProp] of Object.entries(propertyMap)) {
      if (oldProp === "commune") {
        newItem[newProp] =
          arrondissementMap[item[oldProp as keyof Fontaine]] ||
          item[oldProp as keyof Fontaine];
      } else {
        newItem[newProp] = item[oldProp as keyof Fontaine];
      }
    }
    return newItem;
  });
};
