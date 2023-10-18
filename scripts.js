function convertTemperature() {
    const temperatureInput = document.getElementById("temperature-input").value;
    const selectedUnit = document.getElementById("unit-select").value;
    let convertedTemperature = 0;
    let outputUnit = "";

    if (selectedUnit === "Celsius") {
        // Convert Celsius to Fahrenheit
        convertedTemperature = (temperatureInput * 9/5) + 32;
        outputUnit = "°F";
    } else if (selectedUnit === "Fahrenheit") {
        // Convert Fahrenheit to Celsius
        convertedTemperature = (temperatureInput - 32) * 5/9;
        outputUnit = "°C";
    }

    document.getElementById("temperature-output").value = convertedTemperature.toFixed(2); 
    document.getElementById("output-unit").textContent = outputUnit;
}
