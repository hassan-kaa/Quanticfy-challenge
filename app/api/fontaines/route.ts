import {
  fontaineAdapterQuery,
  formatArrondissementFontaine,
} from "@/app/utils/functions";
import {
  arrondissementMap,
  renameProperties,
} from "@/app/utils/preprocessData";
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
  let query = fontaineAdapterQuery(req.nextUrl.search.slice(1));
  Object.values(arrondissementMap).forEach((item) => {
    if (query.includes(item)) {
      query = query
        .replaceAll(item, formatArrondissementFontaine(item))
        .replaceAll(" ", "%20");
    }
  });

  try {
    const response = await fetch(
      `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?where=${query}&limit=-1`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    const result = renameProperties(data.results, propertyMap);
    return NextResponse.json(result);
  } catch (e) {
    console.error("An error occurred:", e);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
};
