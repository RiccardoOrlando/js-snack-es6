// Snack 3

/**
 *
 * @param {array} array
 * @param {Number} a
 * @param {Number} b
 */

function argoments(array, a, b) {
  const ArrayElements = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= a && i <= b) {
      ArrayElements.push(array[i]);
    }
  }
  return ArrayElements;
}

const F1Team = argoments(
  ["Ferrari", "Red Bull", "Mercedes", "Haas", "Toro Rosso"],
  0,
  2
);
console.log(F1Team);
