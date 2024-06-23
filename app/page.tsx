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
          loadData = await getAllFontaines(filter.orQuery, filter.andQuery);
          break;
        case "espacesVertes":
          loadData = await getAllIlotsEspacesVertes(
            filter.orQuery,
            filter.andQuery
          );
          break;
        case "equipements":
          loadData = await getAllIlotsEquipement(
            filter.orQuery,
            filter.andQuery
          );
          break;

        default:
          loadData = await getAllItems(filter.orQuery, filter.andQuery);
          break;
      }
      setData(loadData);
    }
    getData();
  }, [filter.type, filter.andQuery, filter.orQuery]);
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
