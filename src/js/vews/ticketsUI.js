import currencyUI from './currency';
import {formatDate} from '../helpers/formatDate';

class TicketsUI {
    constructor(currency) {
        this.container = '';
        this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
    }

    renderTickets(tickets,container,icon) {
        this.container=container;
        this.clearContainer();

        if (!tickets.length) {
            this.showEmptyMsg();
            return;
        }

        let fragment = '';
        const currency = this.getCurrencySymbol();

        tickets.forEach(ticket => {
            const template = TicketsUI.ticketTemplate(ticket, currency,icon);
            fragment += template;
        });

        this.container.insertAdjacentHTML('afterbegin', fragment);
    }

    clearContainer() {
        this.container.innerHTML = '';
    }

    showEmptyMsg() {
        const template = TicketsUI.emptyMsgTemplate();
        this.container.insertAdjacentHTML('afterbegin', template);
    }

    static emptyMsgTemplate() {
        return `
    <div class="tickets-empty-res-msg">
      По вашему запросу билетов не найдено.
    </div>
    `;
    }

    static ticketTemplate(ticket, currency,icon) {
        let iconColor='';
        icon==='favorite'?iconColor='amber darken-3':iconColor='red';

        return `
       <div class="card ticket-card" data-ticket-id=${ticket.id}>
            <div class="ticket-airline flexAround">
                <img
                    src="${ticket.airline_logo}"
                    class="ticket-airline-img"
                />
            </div>
            <div class="ticket-destination">
                  <div class="departure">
                      <span class="ticket-time">${formatDate(ticket.return_at,'HH:mm')}</span>
                      <span class="ticket-city">${ticket.origin}</span>
                  </div>
                  <div class="flight-icons">
                     <i class="small material-icons">flight_takeoff</i>
                     <div class="line"></div>
                     <i class="small material-icons">flight_land</i>
                  </div>
                  <div class="arrival">
                      <span class="ticket-time">${formatDate(ticket.departure_at,'HH:mm')}</span>
                      <span class="ticket-city">${ticket.destination}</span>
                  </div>
            </div>
            <div class="ticket-price">
                <a class="btn-floating waves-effect waves-light ${iconColor} favorite-add-btn"><i class="material-icons">${icon}</i></a>
                <a class="waves-effect waves-light btn amber darken-3 btn-price">${ticket.price}</a>
            </div>
       </div>

    `;
    }
}

const ticketsUI = new TicketsUI(currencyUI);

export default ticketsUI;