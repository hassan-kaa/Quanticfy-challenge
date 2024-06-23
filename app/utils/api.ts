import { createUrl } from "./functions";

export const getAllFontaines = async (or: string[], and: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}/fontaines`, or, and)
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getAllIlotsEquipement = async (or: string[], and: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}/ilots/equipement`, or, and)
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getAllIlotsEspacesVertes = async (or: string[], and: string[]) => {
  try {
    const response = await fetch(
      createUrl(
        `${process.env.NEXT_PUBLIC_API_URL}/ilots/espaces-vertes`,
        or,
        and
      )
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getAllItems = async (or: string[], and: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}`, or, and)
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
