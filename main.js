document.addEventListener('DOMContentLoaded', function() {
  const celsiusInput = document.getElementById('input-celsius');
  const fahrenheitInput = document.getElementById('input-fahrenheit');
  const convertBtn = document.getElementById('convert-btn');

  const roundToTwoDP = (num) => {
    return num.toFixed(2);
  };

  const celsiusToFaAndKe = () => {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
    const kelvinTemp = celsiusTemp + 273.15;

    fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
  };

  const fahrenheitToCeAndKe = () => {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
    const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);

    celsiusInput.value = roundToTwoDP(celsiusTemp);
  };

  const kelvinToCeAndFa = () => {
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celsiusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = (kelvinTemp * 9) / 5 - 459.67;

    celsiusInput.value = roundToTwoDP(celsiusTemp);
    fahrenheitInput.value = roundToTwoDP(fahrenheitTemp);
  };

  convertBtn.addEventListener('click', function() {
    if (celsiusInput.value !== '') {
      celsiusToFaAndKe();
    } else if (fahrenheitInput.value !== '') {
      fahrenheitToCeAndKe();
    } else if (kelvinInput.value !== '') {
      kelvinToCeAndFa();
    }
  });
});
