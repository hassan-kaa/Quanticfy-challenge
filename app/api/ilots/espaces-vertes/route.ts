import { EspaceVert } from "@/app/utils/types";
import { NextRequest, NextResponse } from "next/server";

// Helper function to validate and filter data to EspaceVert type
const validateData = (data: any[]): EspaceVert[] => {
  return data
    .filter((item): item is EspaceVert => {
      return true;
    })
    .map((item) => {
      return {
        identifiant: item.identifiant,
        nsq_espace_vert: item.nsq_espace_vert,
        nom: item.nom,
        type: item.type,
        adresse: item.adresse,
        arrondissement: item.arrondissement,
        statut_ouverture: item.statut_ouverture,
        ouvert_24h: item.ouvert_24h,
        canicule_ouverture: item.canicule_ouverture,
        ouverture_estivale_nocturne: item.ouverture_estivale_nocturne,
        horaires_periode: item.horaires_periode,
        categorie: item.categorie,
        horaires_dimanche: item.horaires_dimanche,
        horaires_jeudi: item.horaires_dimanche,
        horaires_lundi: item.horaires_lundi,
        horaires_mardi: item.horaires_mardi,
        horaires_mercredi: item.horaires_mercredi,
        horaires_samedi: item.horaires_samedi,
        horaires_vendredi: item.horaires_vendredi,
        geo_point_2d: item.geo_point_2d,
      };
    });
};
export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.search.slice(1);
  try {
    const response = await fetch(
      `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-espaces-verts-frais/records?where=${query}&limit=-1`
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
