// SEGURANÇA DA INFORMAÇAO 2024 | Cifra de césar CORRIGIDO
// Evelin Geovana Steiger

const key = 13;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const encodeText = (key, input) => {
  let response = '';
  let i = 0;
  let k = key - 1;
  let arraySize = letters.length;

  while (i < input.length) {
    const index = letters.search(input[i].toUpperCase());

    let position = index + key;

    if (index !== -1) {
      if (index === arraySize - 1) {
        response = response + letters[k];
      } else if (position > arraySize - 1) {
        while (position > arraySize - 1) {
          position = arraySize - position - 1;
        }

        position = Math.abs(position + 1);
        response = response + letters[position];
      } else {
        position = Math.abs(position);
        response = response + letters[position];
      }
    } else {
      response = response + input[i];
    }

    i++;
  }

  return console.log(response);
};

const decodeText = (key, input) => {
  let response = '';
  let i = 0;
  let arraySize = letters.length;

  while (i < input.length) {
    const index = letters.search(input[i].toUpperCase());

    let position = index - key;

    if (index !== -1) {
      if (index === 0) {
        position = Math.abs(arraySize - key);
      } else if (position < 0) {
        position = Math.abs(arraySize + position);
      } else {
        position = Math.abs(position);
      }

      response = response + letters[position];
    } else {
      response = response + input[i];
    }

    i++;
  }

  return console.log(response);
};
