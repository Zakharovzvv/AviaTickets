import ticketsUI from "../vews/ticketsUI";
import locations from './locations'

const favoritesTickets = {};
const favoriteSection = document.querySelector('.favorite-section');

favoriteSection.addEventListener('click', onFavoritesClick);

export function onFavoritesClick({target}) {
    const el = target.parentElement;

    if (el.classList.contains('favorite-add-btn')) {
        const ticketCard = target.closest('[data-ticket-id]');
        const id = parseInt(ticketCard.dataset.ticketId);
        const ticket = locations.getTicket(id);

        if (target.closest('.tickets-section')) {
            if (el.classList.contains('amber')) {
                favoritesTickets[ticket.id] = ticket;
            } else {
                delete favoritesTickets[ticket.id];
            }
            toggleClass(el);

        } else {
            delete favoritesTickets[ticket.id];
            emptyFavoriteSection();
            const ticketCard = document.querySelector(`[data-ticket-id=\"${id}\"]`);
            const icon = ticketCard.querySelector('.favorite-add-btn');
            toggleClass(icon);
        }
    }


}


export function onShowFavoritesClick({target}) {
    if (!favoriteSection.classList.contains('show')) {
        ticketsUI.renderTickets(Object.values(favoritesTickets), favoriteSection, 'clear');
    }
        favoriteSection.classList.toggle('show');

}

function emptyFavoriteSection() {
    favoriteSection.innerHTML = '';
}

function toggleClass(el) {
    el.classList.toggle('red');
    el.classList.toggle('amber');
    el.classList.toggle('darken-3');
}
