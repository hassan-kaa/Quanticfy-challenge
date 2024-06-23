import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.search.slice(1);
  const urls: string[] = [
    `http://localhost:3000/api/fontaines?${query}`,
    `http://localhost:3000/api/ilots/espaces-vertes?${query}`,
    `http://localhost:3000/api/ilots/equipement?${query}`,
  ];
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    const data = await Promise.all(
      responses.map(async (response) => {
        const res = await response.json();
        return res;
      })
    );

    return NextResponse.json(data.flat());
  } catch (e) {
    console.log(e);
  }
};
