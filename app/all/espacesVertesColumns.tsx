"use client";
import { ColumnDef } from "@tanstack/react-table";
import { GeneralType } from "../utils/types";
import { ArrowUpDown } from "lucide-react";

export const espacesVertesColumns: ColumnDef<GeneralType>[] = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <div
          className="font-bold flex items-center cursor-pointer gap-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <div
          className="font-bold flex items-center cursor-pointer gap-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "adresse",
    header: ({ column }) => {
      return (
        <div
          className="font-bold flex items-center cursor-pointer gap-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Adresse
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "arrondissement",
    header: ({ column }) => {
      return (
        <div
          className="font-bold flex items-center cursor-pointer gap-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Arrondissement
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "ouvert_24h",
    header: ({ column }) => {
      return (
        <div
          className="font-bold flex items-center cursor-pointer gap-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ouverture 24h
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
  {
    accessorKey: "horaires_periode",
    header: ({ column }) => {
      return (
        <div
          className="font-bold flex items-center cursor-pointer gap-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Horaires
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
  },
];
