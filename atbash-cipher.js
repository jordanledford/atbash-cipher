const Atbash = function () { };

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const convert = function (char) {
  const index = alphabet.indexOf(char);
  return (index >= 0) ? alphabet[25 - index] : char;
};

Atbash.prototype.encode = function (string) {
  return string
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .map(convert)
    .join('')
    .match(/.{1,5}/g)
    .join(' ');
};

module.exports = new Atbash();
