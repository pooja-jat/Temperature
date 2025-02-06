const celsius1 = document.getElementById("celsius");
const fahrenheit1 = document.getElementById("fahrenheit");
const kelvin1 = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvin1.value = (currentValue + 273.32).toFixed(2);
      fahrenheit1.value = (currentValue * 1.8 + 32).toFixed(2);
      break;

    case "fahrenheit":
      celsius1.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin1.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;

    case "kelvin":
      celsius1.value = (currentValue - 273.32).toFixed(2);
      fahrenheit1.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
      default:
        break;
  }
}
