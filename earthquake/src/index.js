import { timer } from "rxjs";
import { ajax } from "rxjs/ajax";
import { switchMap, flatMap, distinct } from "rxjs/operators";
import L from "leaflet";

const QUAKE_URL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

const map = L.map("map").setView([33.85, -118.27], 7);
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);

const quakes$ = timer(0, 5000).pipe(
    switchMap(_ => ajax(QUAKE_URL)),
    flatMap(result => result.response.features),
    distinct(quake => quake.properties.code)
);

quakes$.subscribe(quake => {
  const coords = quake.geometry.coordinates;
  const size = quake.properties.mag * 10000;

  L.circle([coords[1], coords[0]], size).addTo(map);
});
