document.addEventListener("DOMContentLoaded", () => {
  const detailsContainer = document.getElementById("country-details");
  const country = JSON.parse(localStorage.getItem("country"));

  if (!country) {
    detailsContainer.innerHTML = "<p>No country selected.</p>";
    return;
  }

  detailsContainer.innerHTML = `
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}" alt="Flag" width="150">
    <p><strong>Capital:</strong> ${country.capital?.[0] || "N/A"}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <p><strong>Subregion:</strong> ${country.subregion || "N/A"}</p>
    <p><strong>Languages:</strong> ${country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
    <p><strong>Currencies:</strong> ${country.currencies ? Object.values(country.currencies).map(cur => cur.name).join(", ") : "N/A"}</p>
    <p><strong>Timezones:</strong> ${country.timezones.join(", ")}</p>
    <p><a href="${country.maps.googleMaps}" target="_blank">View on Google Maps</a></p>
  `;
});
