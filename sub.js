// SEGURANÇA DA INFORMAÇAO 2024 | Substituição
// Evelin Geovana Steiger

const key = 'VHMXUWIBGKJRCSQYOLNZEAFDPT';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const encodeText = (key, input) => {
  let response = '';
  let i = 0;

  while (i < input.length) {
    const keyIndex = letters.search(input[i].toUppercase());

    if (keyIndex !== -1) {
      response = response + key[keyIndex];
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

  while (i < input.length) {
    const index = key.search(input[i].toUppercase());

    if (index !== -1) {
      response = response + letters[index];
    } else {
      response = response + input[i];
    }

    i++;
  }

  return console.log(response);
};
