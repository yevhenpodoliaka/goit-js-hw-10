const options = [
  'name',
  'capital',
  'population',
  'flags',
  'languages',
];

export function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=${options}`
  ).then(response => response.json());
}
