import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.search.slice(1);
  const urls: string[] = [
    `${process.env.NEXT_PUBLIC_API_URL}/fontaines?${query}`,
    `${process.env.NEXT_PUBLIC_API_URL}/ilots/espaces-vertes?${query}`,
    `${process.env.NEXT_PUBLIC_API_URL}/ilots/equipement?${query}`,
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
