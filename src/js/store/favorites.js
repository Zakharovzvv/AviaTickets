import ticketsUI from "../vews/ticketsUI";
import locations from './locations'
import formUI from '../vews/formUI';

const favoritesTickets = {};



/**
 *
 * @param target
 */
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
      const ticketCard = document.querySelector(`[data-ticket-id=\"${id}\"]`);
      const icon = ticketCard.querySelector('.favorite-add-btn');
      toggleClass(icon);
      if (!Object.keys(favoritesTickets).length) {
        formUI.favoriteSection.classList.remove('show');
      }

    }
    ticketsUI.renderTickets(Object.values(favoritesTickets), formUI.favoriteSectionBody, 'clear');
  }


}


export function onShowFavoritesClick({target}) {
  if (Object.keys(favoritesTickets).length) {
    formUI.favoriteSection.classList.toggle('show');
  }
  formUI.favoriteShowBtn.classList.toggle('lighten-3');
  formUI.favoriteShowBtn.classList.toggle('darken-3');

}

function toggleClass(el) {
  el.classList.toggle('red');
  el.classList.toggle('amber');
  el.classList.toggle('darken-3');
}
