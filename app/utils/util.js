export function getIndex(url) {
  const arr = url.split('/');
  return `https://raw.githubusercontent.com/dreamweaver1231/react-project/master/app/images/Pokemon/${arr[
    arr.length - 2
  ]}.png`;
}

export function capitalize(word) {
  return word.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}
