export function markupList(arr) {
  return arr
    .map(({flags,name}) => {
      return `<li><img src="${flags.svg}" alt=""><p>${name.official}</p></li>`;
    })
    .join('');
}

export function markupCard(arr) {
  return arr
    .map(({ name, flags, capital, languages, population }) => {
      return `<h2>${name.official}</h2>
<img src="${flags.svg}" alt="">
<p>${capital}</p>
<p>${Object.values(languages).join(',')}</p>
<p>${population}</p>`;
    })
    .join('');
}

