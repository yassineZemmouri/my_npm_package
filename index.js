const casablancaInfo = {
  cityName: "Casablanca",
  country: "Morocco",
  population: 3.36e6, // estimated population as of 2022
  area: "220 km²",
  timezone: "WEST (Western European Summer Time)",
  coordinates: {
    latitude: 33.5731,
    longitude: -7.5898,
  },
  landmarks: [
    "Hassan II Mosque",
    "Old Medina",
    "Corniche Ain Diab",
    "Casablanca Twin Center",
    "Mohammed V Square",
  ],
  popularCuisine: ["Couscous", "Tagine", "Pastilla", "Mechoui"],
  weather: {
    averaemperature: {
      summer: "25-30°C",
      winter: "10-15°C",
    },
    rainySeason: "November to March",
  },
  transportation: {
    publicTransport: ["Tramway", "Buses"],
    airports: ["Mohammed V International Airport"],
    trainStations: ["Casa-Voyageurs", "Casa-Port"],
  },
  culturalEvents: [
    "Casablanca Festival",
    "International Book Fair of Casablanca",
    "Casablanca Biennale",
  ],
};

function cityName() {
  return casablancaInfo.cityName;
}

function country() {
  return casablancaInfo.country;
}

function population() {
  return casablancaInfo.population;
}

function area() {
  return casablancaInfo.area;
}

function timezone() {
  return casablancaInfo.timezone;
}

function coordinates() {
  return casablancaInfo.coordinates;
}

function landmarks() {
  return casablancaInfo.landmarks;
}

function popularCuisine() {
  return casablancaInfo.popularCuisine;
}

function weather() {
  return casablancaInfo.weather;
}

function transportation() {
  return casablancaInfo.transportation;
}

function culturalEvents() {
  return casablancaInfo.culturalEvents;
}

module.exports.casablanca = {
  cityName,
  country,
  population,
  area,
  timezone,
  coordinates,
  landmarks,
  popularCuisine,
  weather,
  transportation,
  culturalEvents,
};
