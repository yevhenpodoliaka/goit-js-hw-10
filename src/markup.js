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
      return `<h2><span>Country :</span> ${name.official}</h2>
<img src="${flags.svg}" alt="">
<p><span>Capital :</span> ${capital}</p>
<p><span>Languag(s) :</span> ${Object.values(languages).join(',')}</p>
<p><span>Population :</span> ${population}</p>`;
    })
    .join('');
}

