// MAPBOX

// Inspiration: https://docs.mapbox.com/mapbox-gl-js/example/set-popup/

// accessToken for kortet
mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fyb2xpbmVhYWJ5IiwiYSI6ImNsMHFlY2xhODI5NzEzZnFrbzB6Nzhwb2IifQ.yRyC01-4DeWoifSLBpA-Ng';

// Tilføjet min egen position til HAVS Aarhus Ø
const aarhus = [10.226554, 56.163560]

const map = new mapboxgl.Map({
  container: 'map',

  //for at bruge egen style - kopier style URL for kortet
  style: 'mapbox://styles/karolineaaby/cl3ik9vcf000815qmm1lovehd',
  center: aarhus,
  zoom: 14.6,
  pitch: 0, //måles i grader
  bearing: 0, //måles i grader
  customAttribution: '&copy; HAVS'
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.scrollZoom.disable();

// create the popup
const popup = new mapboxgl.Popup({
  offset: 36
}).setHTML(
    `
    <div id="MapPopup">
        <p><b>HAVS AARHUS</b></p>
        <p>Bassin 7, Aarhus Ø</p>
    </div>
    `
);

// create DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';

// create the marker
new mapboxgl.Marker(el)
  .setLngLat(aarhus)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);

