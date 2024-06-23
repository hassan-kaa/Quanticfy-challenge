import { createUrl } from "./functions";

export const getAllFontaines = async (queries: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}/fontaines`, queries)
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getAllIlotsEquipement = async (queries: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}/ilots/equipement`, queries)
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
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
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getAllItems = async (queries: string[]) => {
  try {
    const response = await fetch(
      createUrl(`${process.env.NEXT_PUBLIC_API_URL}`, queries)
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
