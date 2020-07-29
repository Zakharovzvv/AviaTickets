class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency');
        this.dictionary = {
            RUB: 'RUB',
            USD: 'USD',
            EUR: 'EUR',
        }

    }

    get currencyValue() {
        return this.currency.value;
    }
    getCurrencySymbol(){
        return this.dictionary[this.currencyValue];
    }
}

const currency = new CurrencyUI();

export default currency;