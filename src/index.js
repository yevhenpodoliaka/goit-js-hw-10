import './css/styles.css';
import getRefs from './refs';
import 'lodash.debounce';
import { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const inputValue = e.target.value.trim();
  fetchCountries(inputValue).then(onFetchResult).catch(onFetcherror);
}

function onFetchResult(response) {
  console.log(response);
  if (response.length > 10) {
    refs.list.innerHTML = '';
    refs.card.innerHTML = '';

    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (response.length < 11 && response.length > 1) {
    refs.list.innerHTML = markupList(response);
  } else {
    refs.list.innerHTML = '';
    refs.card.innerHTML = markupCard(response);
  }
}

function markupList(arr) {
  return arr
    .map(el => {
      return `<li><img src="${el.flags.svg}" alt=""><p>${el.name.official}</p></li>`;
    })
    .join('');
}

function markupCard(arr) {
  return arr
    .map(el => {
      return `<h2>${el.name.official}</h2>
<img src="${el.flags.svg}" alt="">
<p>${el.capital}</p>
<p>${el.languages}</p>
<p>${el.population}</p>`;
    })
    .join('');
}

function onFetcherror(error) {
  console.log(error);
  Notify.failure('error');
}
