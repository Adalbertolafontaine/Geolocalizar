import "./style.css";
import "leaflet/dist/leaflet.css";
import { conseciones } from "./concesiones";
import L from "leaflet";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

`;

const map = L.map("app").fitWorld();

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
tiles
function onLocationFound(e: any) {
  const radius = e.accuracy / 2;

  const locationMarker = L.marker(e.latlng)
    .addTo(map)
    .bindPopup(`You are within ${radius} meters from this point`)
    .openPopup();

  const locationCircle = L.circle(e.latlng, radius).addTo(map);
  locationMarker
  locationCircle
}
 
function style() {
  return {
      fillColor:'red',
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}


function onLocationError(e: any) {
  alert(e.message);
}
const geojson = L.geoJson(conseciones as any,{

  style
}).addTo(map);
map.on("locationfound", onLocationFound);
map.on("locationerror", onLocationError);
geojson
map.locate({ setView: true, maxZoom: 16 });
