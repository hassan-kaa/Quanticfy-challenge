"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import { DataTable } from "@/components/data-table";
import { useFilter } from "./contexts/FiltersContext";
import {
  getAllFontaines,
  getAllIlotsEspacesVertes,
  getAllIlotsEquipement,
  getAllItems,
} from "./utils/api";
import { fontainescolumns } from "./data-columns/fontainesColumns";
import { espacesVertesColumns } from "./data-columns/espacesVertesColumns";
import { equipementsColumns } from "./data-columns/equipementsColumns";
import { commonColumns } from "./data-columns/commonColumns";
import { GeneralType } from "./utils/types";

export default function DemoPage() {
  const [data, setData] = useState<GeneralType[]>([]);
  const { filter } = useFilter();
  useEffect(() => {
    async function getData() {
      let loadData;
      switch (filter.type) {
        case "fontaines":
          loadData = await getAllFontaines(filter.queries);
          break;
        case "espacesVertes":
          loadData = await getAllIlotsEspacesVertes(filter.queries);
          break;
        case "equipements":
          loadData = await getAllIlotsEquipement(filter.queries);
          break;

        default:
          loadData = await getAllItems(filter.queries);
          break;
      }
      setData(loadData);
    }
    getData();
  }, [filter.type, filter.queries]);
  return (
    <div className="container mx-auto py-10">
      <SearchBar />
      {filter.type === "fontaines" && (
        <DataTable columns={fontainescolumns} data={data} />
      )}
      {filter.type === "espacesVertes" && (
        <DataTable columns={espacesVertesColumns} data={data} />
      )}
      {filter.type === "equipements" && (
        <DataTable columns={equipementsColumns} data={data} />
      )}
      {filter.type === "tous" && (
        <DataTable columns={commonColumns} data={data} />
      )}
    </div>
  );
}
