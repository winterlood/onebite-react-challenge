import Chance from "Chance";
const change = new Chance();

export function getRandomName() {
  return change.name();
}

export function getRandomEmail() {
  return change.email();
}
