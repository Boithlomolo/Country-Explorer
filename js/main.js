document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("countries-container");
  const searchInput = document.getElementById("search");
  const regionFilter = document.getElementById("region-filter");
  let countries = [];

  async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    countries = await res.json();
    displayCountries(countries);
  }

  function displayCountries(data) {
    container.innerHTML = "";
    data.forEach(country => {
      const card = document.createElement("div");
      card.className = "country-card";
      card.innerHTML = `
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
        <h3>${country.name.common}</h3>
        <p>Population: ${country.population.toLocaleString()}</p>
        <p>Region: ${country.region}</p>
      `;
      card.addEventListener("click", () => {
        localStorage.setItem("country", JSON.stringify(country));
        window.location.href = "country.html";
      });
      container.appendChild(card);
    });
  }

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = countries.filter(c => c.name.common.toLowerCase().includes(value));
    displayCountries(filtered);
  });

  regionFilter.addEventListener("change", () => {
    const region = regionFilter.value;
    const filtered = region ? countries.filter(c => c.region === region) : countries;
    displayCountries(filtered);
  });

  fetchCountries();
});
