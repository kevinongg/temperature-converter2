// step 2
const convertToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};

// CHECK IF WORKING//
// convertToCelsius();
// console.log(convertToCelsius(1));

// step 3
const describeTemperature = (fahrenheit) => {
  const celsius = convertToCelsius(fahrenheit);
  if (celsius < 0) {
    return `very cold.`;
  }
  if (celsius < 20) {
    return `cold.`;
  }
  if (celsius < 30) {
    return `warm.`;
  }
  if (celsius < 40) {
    return `hot.`;
  }
  if (celsius >= 40) {
    return `very hot.`;
  }
};

// describeTemperature();
// console.log(describeTemperature(10));

const fahrenheitInput = prompt(`Please enter a temperature in Fahrenheit`);
const celsius = convertToCelsius(fahrenheitInput);
const description = describeTemperature(fahrenheitInput);
alert(
  `The temperature you entered is ${fahrenheitInput}F, which is ${celsius.toFixed(
    2
  )}C, it will feel ${description}`
);
