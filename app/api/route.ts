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

    responses.forEach((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data from ${response.url}: ${response.statusText}`
        );
      }
    });

    const data = await Promise.all(
      responses.map(async (response) => {
        const res = await response.json();
        return res;
      })
    );

    return NextResponse.json(data.flat());
  } catch (e) {
    console.error("An error occurred:", e);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
};
