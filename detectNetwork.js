// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.

var networks = {

  dinersClub: {
    name: 'Diner\'s Club',
    prefixLength: null,
    isDinersClub: function (str){
      if (
        str.length === 14 &&
        (str.slice(0, 2) === '38' || str.slice(0, 2) === '39')
      ){
        this.prefixLength = 2;
        return true;
      };
    }
  },

  americanExpress: {
    name: 'American Express',
    prefixLength: null,
    isAmericanExpress: function (str){
      if (
        str.length === 15 &&
        (str.slice(0, 2) === '34' || str.slice(0, 2) === '37')
      ){
        this.prefixLength = 2;
        return true;
      };
    }
  },

  visa: {
    name: 'Visa',
    prefixLength: null,
    isVisa: function (str){
      if (
        (str.length === 13 || str.length === 16 || str.length === 19) &&
        (str.slice(0, 1) === '4')
      ){
        this.prefixLength = 1;
        return true;
      };
    }
  },

  masterCard: {
    name: 'MasterCard',
    prefixLength: null,
    isMasterCard: function (str){
      if (
        str.length === 16 &&
        (Number(str.slice(0, 2)) >= 51 && Number(str.slice(0, 2)) <= 55)
      ){
        this.prefixLength = 2;
        return true;
      };
    }

  },

  discover: {
    name: 'Discover',
    prefixLength: null,
    isDiscover: function (str){
      if (
        (str.length === 16 || str.length === 19) &&
        (str.slice(0, 4) === '6011' ||
        (Number(str.slice(0, 3)) >= 644 && Number(str.slice(0, 3)) <= 649) ||
        str.slice(0, 2) === '65')
      ){
        if (str.slice(0, 4) === '6011'){
            this.prefixLength = 4;
            return true;
        } else if (Number(str.slice(0, 3)) >= 644 && Number(str.slice(0, 3)) <= 649) {
            this.prefixLength = 3;
            return true;
        } else {
            this.prefixLength = 2;
            return true;
        }
      };
    }
  },

  maestro: {
    name: 'Maestro',
    prefixLength: null,
    isMaestro: function (str){
      if (
      (str.length >= 12 && str.length <= 19) &&
      (str.slice(0, 4) === '5018' ||
      str.slice(0, 4) === '5020' ||
      str.slice(0, 4) === '5038' ||
      str.slice(0, 4) === '6304')){
        this.prefixLength = 4;
        return true;
      };
    }
  },

  chinaUnionPay: {
    name: 'China UnionPay',
    prefixLength: null,
    isChinaUnionPay: function (str){
      if (
        (str.length >= 16 && str.length <= 19) &&
        (Number(str.slice(0, 6)) >= 622126 && Number(str.slice(0, 6)) <= 622925) ||
        (Number(str.slice(0, 3)) >= 624 && Number(str.slice(0, 3)) <= 626) ||
        (Number(str.slice(0, 4)) >= 6282 && Number(str.slice(0, 4)) <= 6288)
      ) {
        if (Number(str.slice(0, 6)) >= 622126 && Number(str.slice(0, 6)) <= 622925){
          this.prefixLength = 6;
          return true;
        } else if (Number(str.slice(0, 3)) >= 624 && Number(str.slice(0, 3)) <= 626){
          this.prefixLength = 3;
          return true;
        } else {
          this.prefixLength = 4;
          return true;
        }
      }
    }
  },

  'switch': {
    name: 'Switch',
    prefixLength: null,
    isSwitch: function (str){
      if (
        (str.length === 16 || str.length === 18 || str.length === 19) &&
        (
          str.slice(0, 4) === '4903' ||
          str.slice(0, 4) === '4905' ||
          str.slice(0, 4) === '4911' ||
          str.slice(0, 4) === '4936' ||
          str.slice(0, 4) === '6333' ||
          str.slice(0, 4) === '6759' ||
          str.slice(0, 6) === '564182' ||
          str.slice(0, 6) === '633110'
        )
      ){
        if (str.slice(0, 4) === '4903' ||
            str.slice(0, 4) === '4905' ||
            str.slice(0, 4) === '4911' ||
            str.slice(0, 4) === '4936' ||
            str.slice(0, 4) === '6333' ||
            str.slice(0, 4) === '6759'){
              this.prefixLength = 4;
              return true;
        } else {
          this.prefixLength = 6;
          return true;
        }
      }
    }
  }
}


var detectNetwork = function(cardNumber) {

  if (networks.visa.isVisa(cardNumber) && networks.switch.isSwitch(cardNumber)){
    if (networks.switch.prefixLength > networks.visa.prefixLength){
      return networks.switch.name;
    } else {
      return networks.visa.name;
    }
  } else if (networks.dinersClub.isDinersClub(cardNumber)){
    return networks.dinersClub.name;
  } else if (networks.americanExpress.isAmericanExpress(cardNumber)){
    return networks.americanExpress.name;
  } else if (networks.visa.isVisa(cardNumber)){
    return networks.visa.name;
  } else if (networks.masterCard.isMasterCard(cardNumber)){
    return networks.masterCard.name;
  } else if (networks.discover.isDiscover(cardNumber)){
    return networks.discover.name;
  } else if (networks.maestro.isMaestro(cardNumber)){
    return networks.maestro.name;
  } else if (networks.chinaUnionPay.isChinaUnionPay(cardNumber)){
    return networks.chinaUnionPay.name;
  } else if (networks.switch.isSwitch(cardNumber)){
    return networks.switch.name;
  } else {
    return 'Network Unknown';
  }

}
