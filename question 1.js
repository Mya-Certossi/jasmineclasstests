function squareFeetToAcres(squareFeet) {
    return squareFeet / 43560;
}

function calculateMowingTime(widthInMeters, lengthInMeters, squareMetersPerMinute) {
    const lawnAreaInSquareMeters = widthInMeters * lengthInMeters;
    return lawnAreaInSquareMeters / squareMetersPerMinute;
}

function determineAirQuality(aqi) {
    if (aqi >= 0 && aqi <= 50) {
        return "Good";
    } else if (aqi >= 51 && aqi <= 100) {
        return "Moderate";
    } else if (aqi >= 101 && aqi <= 150) {
        return "Unhealthy for Sensitive Groups";
    } else if (aqi >= 151 && aqi <= 200) {
        return "Unhealthy";
    } else if (aqi >= 201 && aqi <= 300) {
        return "Very Unhealthy";
    } else {
        return "Hazardous";
    }
}

const conversions = [20000, 50000, 100000]; // Square feet
console.log("Conversions from square feet to acres:");
conversions.forEach((sqFeet) => {
    console.log(`${sqFeet} square feet = ${squareFeetToAcres(sqFeet)} acres`);
});

const lawns = [
    { width: 10, length: 20, squareMetersPerMinute: 5 },
    { width: 15, length: 30, squareMetersPerMinute: 7 },
    { width: 8, length: 25, squareMetersPerMinute: 4 }
];
console.log("\nMowing time for different lawn sizes:");
lawns.forEach((lawn, index) => {
    console.log(`Lawn ${index + 1}: ${calculateMowingTime(lawn.width, lawn.length, lawn.squareMetersPerMinute)} minutes`);
});

const aqiValues = [25, 75, 120, 175, 250, 350];
console.log("\nAir quality for different AQI values:");
aqiValues.forEach((aqi) => {
    console.log(`AQI ${aqi}: ${determineAirQuality(aqi)}`);
});