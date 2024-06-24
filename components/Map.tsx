import Map from "react-map-gl";

const MapComponent = ({
  longitude,
  latitude,
}: {
  longitude: number;
  latitude: number;
}) => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 13,
      }}
      style={{ width: "100%", height: "400px" }}
      mapStyle="mapbox://styles/hassankaabechi/clxshazmt006601paaow9fffj"
    />
  );
};

export default MapComponent;
