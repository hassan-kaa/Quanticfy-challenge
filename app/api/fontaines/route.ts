import { renameProperties } from "@/app/utils/preprocessData";
import { NextResponse, NextRequest } from "next/server";
const propertyMap = {
  type_objet: "type",
  modele: "nom",
  no_voirie_pair: "no_voirie_pair",
  no_voirie_impair: "no_voirie_impair",
  voie: "adresse",
  commune: "arrondissement",
  dispo: "dispo",
};
export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.search.slice(1);
  try {
    const response = await fetch(
      `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?where=${query}&limit=-1`
    );
    const data = await response.json();
    const result = renameProperties(data.results, propertyMap);
    return NextResponse.json(result);
  } catch (e) {
    console.log(e);
  }
};
