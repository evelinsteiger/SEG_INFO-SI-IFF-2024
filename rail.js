// SEGURANÇA DA INFORMAÇAO 2024 | Cifra de césar
// Evelin Geovana Steiger

const key = 2;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const encodeText = (key, input) => {
  let response = '';
  let i = 0;
  let l = 0;

  let size = input.length;
  let layers = [];

  while (i < size) {
    const index = letters.search(input[i].toUpperCase());

    if (l < key - 1) {
      layers[l] = layers[l] + input[i];

      if (index !== -1) {
        l++;
      }
    } else {
      l = 0;

      layers[l] = layers[l] + input[i];
    }

    i++;
  }

  response = layers.join('');

  return console.log(response);
};

const decodeText = (key, input) => {
  let response = '';
  let i = 0;
  let arraySize = letters.length;

  return console.log(response);
};
