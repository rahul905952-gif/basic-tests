// utils/helpers.js
module.exports = {
  generateRandomString(length = 6) {
    return Math.random().toString(36).substring(2, 2 + length);
  },

  generateRandomPostalCode() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }
};
