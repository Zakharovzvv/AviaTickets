import currencyUI from './currency';

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
          <span class="ticket-airline-name"
            >${ticket.airline_name}</span
          >
          <a class="btn-floating waves-effect waves-light ${iconColor} favorite-add-btn"><i class="material-icons">${icon}</i></a>
        </div>
        <div class="ticket-destination flexAround">
          <div class="flexCenter">
            <span class="ticket-city">${ticket.origin_name}</span>
            <i class="medium material-icons">flight_takeoff</i>
          </div>
          <div class="flexCenter">
            <i class="medium material-icons">flight_land</i>
            <span class="ticket-city">${ticket.destination_name}</span>
          </div>
        </div>
        <div class="ticket-time-price flexAround">
          <span class="ticket-time-departure flexAround">${ticket.departure_at}</span>
          <span class="ticket-price ml-auto light-blue darken-3">${currency} ${ticket.price}</span>
        </div>
        <div class="ticket-additional-info flexAround">
          <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
          <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
        </div>
      </div>

    `;
    }
}

const ticketsUI = new TicketsUI(currencyUI);

export default ticketsUI;