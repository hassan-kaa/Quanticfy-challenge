import { Equipement, EspaceVert, GeneralType } from "@/app/utils/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import MapComponent from "./Map";
const isEspaceVert = (item: GeneralType): item is EspaceVert => {
  return (item as EspaceVert).geo_point_2d !== undefined;
};

const isEquipement = (item: GeneralType): item is Equipement => {
  return (item as Equipement).geo_point_2d !== undefined;
};
const PopupCard = ({ item }: { item: GeneralType }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full h-10 justify-center items-center">
        <ExternalLink size={20} />
      </DialogTrigger>
      <DialogContent className="w-full md:w-1/2">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">{item.nom}</DialogTitle>
          <DialogDescription className=" pt-2 ">
            {isEspaceVert(item) || isEquipement(item) ? (
              <MapComponent
                latitude={item.geo_point_2d.lat}
                longitude={item.geo_point_2d.lon}
              />
            ) : (
              ""
            )}
            <ScrollArea className="h-[400px] w-full flex flex-col rounded-md border p-4">
              {Object.keys(item).map(
                (key) =>
                  key !== "geo_point_2d" && (
                    <>
                      <div className="py-4">
                        <div key={key} className="flex justify-between ">
                          <span className="font-bold capitalize text-mainColor-500">
                            {key}
                          </span>
                          <span className="font-bold  ">
                            {item[key as keyof GeneralType]}
                          </span>
                        </div>
                      </div>
                      <Separator />
                    </>
                  )
              )}
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default PopupCard;
