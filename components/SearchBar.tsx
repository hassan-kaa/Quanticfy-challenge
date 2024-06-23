"use client";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Separator } from "./ui/separator";
import CheckboxItem from "./CheckboxItem";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { useFilter } from "@/app/contexts/FiltersContext";

const arrondissements = [
  "75001",
  "75002",
  "75003",
  "75004",
  "75005",
  "75006",
  "75007",
  "75008",
  "75009",
  "75010",
  "75011",
  "75012",
  "75013",
  "75014",
  "75015",
  "75016",
  "75017",
  "75018",
  "75019",
  "75020",
];

const SearchBar = () => {
  const [quoiInput, setQuoiInput] = useState<string>("");
  const [ouInput, setOuInput] = useState<string>("");
  const { filter, setFilterType, setAndQuery, setOrQuery } = useFilter();
  const handleCheck = (item: string) => {
    if (filter.orQuery.includes(item)) {
      setOrQuery(filter.orQuery.filter((el) => el !== item));
    } else {
      setOrQuery([...filter.orQuery, item]);
    }
  };
  const removeFilter = (item: string) => {
    if (filter.andQuery.includes(item)) {
      setAndQuery(filter.andQuery.filter((el) => el !== item));
    } else {
      setOrQuery(filter.orQuery.filter((el) => el !== item));
    }
  };
  const handleSearch = () => {
    if (quoiInput === "" && ouInput === "") {
      return;
    }
    if (quoiInput !== "" && ouInput === "") {
      setOrQuery([quoiInput]);
    }
    if (quoiInput === "" && ouInput !== "") {
      setOrQuery([ouInput]);
    }
    setAndQuery([quoiInput, ouInput]);
  };

  return (
    <div className="w-full z-50 py-8 flex flex-col gap-4">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-2 rounded-lg">
        <Select
          onValueChange={(value) => {
            setFilterType(value);
          }}
        >
          <SelectTrigger className="bg-mainColor-50 hover:bg-mainColor-100 font-bold">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="tous">Tous</SelectItem>
              <SelectItem value="fontaines">Fontaines a boire</SelectItem>
              <SelectItem value="espacesVertes">Espaces vertes</SelectItem>
              <SelectItem value="equipements">Activites-Equipement</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          onChange={(e) => {
            setQuoiInput(e.target.value);
          }}
          type="text"
          placeholder="Quoi... ?"
        />
        <Input
          onChange={(e) => {
            setOuInput(e.target.value);
          }}
          type="text"
          placeholder="Ou... ?"
        />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Arrondissement" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="flex flex-col gap-4 p-4">
              {arrondissements.map((item) => (
                <CheckboxItem
                  key={item}
                  label={item}
                  checked={filter.orQuery.includes(item)}
                  onChange={() => {
                    handleCheck(item);
                  }}
                />
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger className="w-full h-10 justify-between px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-mainColor-50 hover:bg-mainColor-100 text-black rounded-md flex items-center gap-2 font-bold">
            Filtres
            <SlidersHorizontal size={20} />
          </PopoverTrigger>
          <PopoverContent className="p-4 bg-white shadow-lg rounded-lg z-30">
            <div className="flex flex-col gap-2">
              {filter.filters.map((item) => (
                <CheckboxItem
                  key={item}
                  label={item}
                  checked={filter.orQuery.includes(item)}
                  onChange={() => {
                    handleCheck(item);
                  }}
                />
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Button
          onClick={handleSearch}
          className="flex items-center gap-2 rounded-lg text-white bg-mainColor-500 hover:bg-mainColor-400  "
        >
          Search
          <Search />
        </Button>
      </div>
      <div className="flex gap-2 items-center">
        {filter.andQuery.map((item) => (
          <Badge
            key={item}
            className="py-2 px-4 cursor-pointer flex items-center gap-1 bg-mainColor-50 hover:bg-mainColor-100"
            variant="outline"
          >
            {item}
            <X
              size={14}
              onClick={() => {
                removeFilter(item);
              }}
            />
          </Badge>
        ))}
        {filter.orQuery.map((item) => (
          <Badge
            key={item}
            className="py-2 px-4 cursor-pointer flex items-center gap-1 bg-mainColor-50 hover:bg-mainColor-100"
            variant="outline"
          >
            {item}
            <X
              size={14}
              onClick={() => {
                removeFilter(item);
              }}
            />
          </Badge>
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
