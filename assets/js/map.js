  const map = L.map("map", {
    worldCopyJump: true,
    minZoom: 2,
  }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      if (!data.latitude || !data.longitude) return;

      const marker = L.circleMarker(
        [data.latitude, data.longitude],
        {
          radius: 3,
          color: "#ff0000",
          fillColor: "#ff0000",
          fillOpacity: 0.3,
        }
      ).addTo(map);

      marker.bindPopup(
        `Love from ${data.city || ""} ${data.country_name || ""}`
      );
    })
    .catch(() => {
      console.log("Location unavailable");
    });