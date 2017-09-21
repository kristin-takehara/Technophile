var phoneNumber = '5555555';

var Phone = (function(phoneNumber) {
  this.phoneNumber = phoneNumber;
  this.callPhone = function(phoneNumber) {
    return this.phoneNumber + ' calls ' + phoneNumber;
  };
});

module.exports = Phone;