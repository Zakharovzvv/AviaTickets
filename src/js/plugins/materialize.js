import 'materialize-css/sass/materialize.scss';
import 'materialize-css/dist/js/materialize.min.js';

// Init select
const sl = document.querySelectorAll('select');
M.FormSelect.init(sl);

export function getSlInstance(elem) {
  return   M.FormSelect.getInstance(elem);
}
// Init autocomplete
const ac = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        Apple: null,
        Microsoft: null,
        Google: 'https://placehold.it/250x250',
    },
});

export function getAcInstance(elem) {
  return   M.Autocomplete.getInstance(elem);
}

// Init datepickers
const dp = document.querySelectorAll('.datepicker');
M.Datepicker.init(dp, {
    showClearBtn: true,
    format: 'yyyy-mm',
});

export function getDpInstance(elem) {
  return   M.Datepicker.getInstance(elem);
}