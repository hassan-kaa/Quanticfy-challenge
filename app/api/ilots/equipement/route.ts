import { Equipement } from "@/app/utils/types";
import { NextRequest, NextResponse } from "next/server";

// Helper function to validate and filter data to Equipement type
const validateData = (data: any[]): Equipement[] => {
  return data
    .filter((item): item is Equipement => {
      return true;
    })
    .map((item) => {
      return {
        identifiant: item.identifiant,
        nom: item.nom,
        adresse: item.adresse,
        arrondissement: item.arrondissement,
        type: item.type,
        payant: item.payant,
        statut_ouverture: item.statut_ouverture,
        horaires_periode: item.horaires_periode,
        horaires_lundi: item.horaires_lundi,
        horaires_mardi: item.horaires_mardi,
        horaires_mercredi: item.horaires_mercredi,
        horaires_jeudi: item.horaires_jeudi,
        horaires_vendredi: item.horaires_vendredi,
        horaires_samedi: item.horaires_samedi,
        horaires_dimanche: item.horaires_dimanche,
        geo_point_2d: item.geo_point_2d,
      };
    });
};

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.search.slice(1);
  try {
    const response = await fetch(
      `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?where=${query}&limit=-1`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    const result = validateData(data.results);
    return NextResponse.json(result);
  } catch (e) {
    console.error("An error occurred:", e);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
};
