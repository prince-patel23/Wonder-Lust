mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //listing geometry.cordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${listing.title}</h3><p>Exact Location will be Provided After bokking.</p>`,
    ),
  )
  .addTo(map);
