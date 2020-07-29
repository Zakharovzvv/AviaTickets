import ticketsUI from "../vews/ticketsUI";
import locations from './locations'

const favoritesTickets = {};
const favoriteSection = document.querySelector('.favorite-section');

favoriteSection.addEventListener('click',onFavoritesClick);

export function onFavoritesClick({target}) {
    const el = target.parentElement;
    if (el.classList.contains('favorite-add-btn')) {
        const ticketCard = target.closest('[data-ticket-id]');
        const id = parseInt(ticketCard.dataset.ticketId);
        const ticket = locations.getTicket(id);

        if (el.classList.contains('teal')) {
            favoritesTickets[ticket.id] = ticket;
        } else {
            delete favoritesTickets[ticket.id];
        }

        el.classList.toggle('red');
        el.classList.toggle('teal');

    }


}


export function onShowFavoritesClick({target}) {
    if (favoriteSection.style.display==='none'){
    ticketsUI.renderTickets(Object.values(favoritesTickets), favoriteSection, 'clear');
    favoriteSection.style = 'display:flex';
    }else {
        favoriteSection.style = 'display:none';
        favoriteSection.innerHTML='';
    }
}

