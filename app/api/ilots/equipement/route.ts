import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.search.slice(1);
  try {
    const response = await fetch(
      `https://opendata.paris.fr//api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?where=${query}&limit=-1`
    );
    const data = await response.json();
    return NextResponse.json(data.results);
  } catch (e) {
    console.log(e);
  }
};
