document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convert');
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitOutput = document.getElementById('fahrenheit');
    const kelvinOutput = document.getElementById('kelvin');

    convertButton.addEventListener('click', function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            const kelvinValue = celsiusValue + 273.15;

            fahrenheitOutput.textContent = `Temperature in Fahrenheit: ${fahrenheitValue.toFixed(2)}°F`;
            kelvinOutput.textContent = `Temperature in Kelvin: ${kelvinValue.toFixed(2)}K`;
        } else {
            alert('Please enter a valid temperature in Celsius.');
        }
    });
});
