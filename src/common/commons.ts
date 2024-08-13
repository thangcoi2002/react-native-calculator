import Decimal from 'decimal.js';

export const formatNumber = (input: string) => {
  const number = parseFloat(input);
  if (number >= 1e9)
    return (Math.round(number / 1e8) * 1e8).toExponential().replace('+', '');
  else if (number > 1e3 || number < -1e3) {
    return input
      .toString()
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return input;
};

export const performCalculation = (
  num1: string,
  num2: string,
  operation: string|undefined,
): number => {
  console.log(operation);
  const a = new Decimal(num1);
  const b = new Decimal(num2);
  let result: Decimal;
  switch (operation) {
    case 'plus':
      result = a.plus(b);
      break;
    case 'minus':
      result = a.minus(b);
      break;
    case 'multi':
      result = a.times(b);
      break;
    case 'divide':
      if (b.isZero()) {
        throw new Error('Division by zero');
      }
      result = a.div(b);
      break;
    default:
      throw new Error(`Invalid operation: ${operation}`);
  }
  return result.toNumber();
};
