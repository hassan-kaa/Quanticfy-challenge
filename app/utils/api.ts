import { createUrl } from "./functions";
import { Equipement, EspaceVert, Fontaine, GeneralType } from "./types";

export const getAllFontaines = async (queries: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}/fontaines`, queries)
    );
    const data = await response.json();
    return data as Fontaine[];
  } catch (e) {
    console.log(e);
    return [];
  }
};
export const getAllIlotsEquipement = async (queries: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}/ilots/equipement`, queries)
    );
    const data = await response.json();
    return data as Equipement[];
  } catch (e) {
    console.log(e);
    return [];
  }
};
export const getAllIlotsEspacesVertes = async (queries: string[]) => {
  try {
    const response = await fetch(
      createUrl(
        `${process.env.NEXT_PUBLIC_API_URL}/ilots/espaces-vertes`,
        queries
      )
    );
    const data = await response.json();
    return data as EspaceVert[];
  } catch (e) {
    console.log(e);
    return [];
  }
};
export const getAllItems = async (queries: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}`, queries)
    );
    const data = await response.json();
    return data as GeneralType[];
  } catch (e) {
    console.log(e);
    return [];
  }
};
