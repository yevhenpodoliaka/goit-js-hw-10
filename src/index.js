import './css/styles.css';
import getRefs from './refs';
import { markupCard, markupList } from './markup';
import 'lodash.debounce';
import { Notify } from 'notiflix';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  if (e.target.value === '') {
    refs.list.innerHTML = '';
    refs.card.innerHTML = '';
    return;
  }
  const inputValue = e.target.value.trim();
  fetchCountries(inputValue).then(onFetchResult).catch(onFetcherror);
}

function onFetchResult(response) {
  if (response.length > 10) {
    refs.list.innerHTML = '';
    refs.card.innerHTML = '';

    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (response.length < 11 && response.length > 1) {
    refs.card.innerHTML = '';
    refs.list.innerHTML = markupList(response);
  } else {
    refs.list.innerHTML = '';
    refs.card.innerHTML = markupCard(response);
  }
}

function onFetcherror() {
  Notify.failure('Oops, there is no country with that name');
}
