export function getIndex(url) {
  const data = url.split('/');
  const index = data[data.length - 2];
  return `https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/${index}.png`;
}

export function capitalize(word) {
  return word.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}
