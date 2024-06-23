"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
type filterType = {
  type: string;
  filters: string[];
  queries: string[];
};
type FilterContextType = {
  filter: filterType;
  setFilterType: (type: string) => void;
  setQueries: (queries: string[]) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const filterOptions: { [key: string]: string[] } = {
  tous: ["arrondissement", "type", "adresse"],
  fontaines: ["payant", "disponibilite", "horaires_periode"],
  espacesVertes: ["categorie", "ouverture", "surface"],
  equipements: ["type", "adresse", "arrondissement"],
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<filterType>({
    type: "tous",
    filters: filterOptions["tous"],
    queries: [],
  });

  const setFilterType = (type: string) => {
    setFilter({
      ...filter,
      type,
      filters: filterOptions[type] || [],
    });
  };

  const setQueries = (queries: string[]) => {
    setFilter({
      ...filter,
      queries: queries,
    });
  };

  useEffect(() => {
    setFilterType(filter.type);
  }, []);

  return (
    <FilterContext.Provider value={{ filter, setFilterType, setQueries }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
