// BEGIN
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  
    this.getValue = () => this.value;
    this.getCurrency = () => this.currency;
  
    this.exchangeTo = (targetCurrency) => {
      if (this.currency === targetCurrency) {
        return new Money(this.value, this.currency);
      }
  
      let exchangedValue;
      if (this.currency === 'usd' && targetCurrency === 'eur') {
        exchangedValue = this.value * 0.7;
      } else if (this.currency === 'eur' && targetCurrency === 'usd') {
        exchangedValue = this.value * 1.2;
      } else {
        throw new Error(`Unsupported currency conversion: ${this.currency} to ${targetCurrency}`);
      }
  
      return new Money(exchangedValue, targetCurrency);
    };
  
    this.add = (money) => {
      if (this.currency === money.getCurrency()) {
        return new Money(this.value + money.getValue(), this.currency);
      }
  
      const convertedMoney = money.exchangeTo(this.currency);
      return new Money(this.value + convertedMoney.getValue(), this.currency);
    };
  
    this.format = () => {
      let locale;
      let currencySymbol;
  
      if (this.currency === 'usd') {
        locale = 'en-US';
        currencySymbol = 'USD';
      } else if (this.currency === 'eur') {
        locale = 'en-US';
        currencySymbol = 'EUR';
      } else {
        throw new Error(`Unsupported currency: ${this.currency}`);
      }
  
      return this.value.toLocaleString(locale, {
        style: 'currency',
        currency: currencySymbol,
        currencyDisplay: 'symbol',
      });
    };
  }
  
  export default Money;
// END
