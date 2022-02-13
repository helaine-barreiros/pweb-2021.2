import { generate } from 'generate-password';

export function generatePassword(hasNumbers, hasLowercase, hasUppercase, hasSymbols){
  return generate({
    length: 10,
    numbers: hasNumbers,
    lowercase: hasLowercase,
    uppercase: hasUppercase,
    symbols: hasSymbols
  });
}
