import '../styles/style.sass';
import './plugins';
import locations from './store/locations';
import formUI from './vews/formUI';
import ticketsUI from "./vews/ticketsUI";
import currencyUI from "./vews/currency";
import {onFavoritesClick,onShowFavoritesClick} from "./store/favorites";

document.addEventListener('DOMContentLoaded',e=>{
    const form=formUI.form;
    const ticketSection=document.querySelector('.tickets-section');
    const favoriteShow=document.querySelector('.favorite-show-btn');
    ininApp();

    form.addEventListener('submit', e=>{
        e.preventDefault();
        onFormSubmit();
    });
    ticketSection.addEventListener('click',onFavoritesClick);
    favoriteShow.addEventListener('click',onShowFavoritesClick);

     async function ininApp() {
        await locations.init();
        formUI.setACData(locations.shortCities)
    }
    
    async function onFormSubmit() {
        const origin = locations.getCityCodeByKey(formUI.originValue);
        const destination = locations.getCityCodeByKey(formUI.destinationValue);
        const depart_date = formUI.departDateValue;
        const return_date = formUI.returnDateValue;
        const currency = currencyUI.currencyValue;

        await locations.fetchTickets({
            origin,
            destination,
            depart_date,
            return_date,
            currency,
        });

        ticketsUI.renderTickets(locations.lastSearch,ticketSection,'favorite');
    }
});

