const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fullKey = key.padEnd(message.length, key);
    let encryptedMessage = '';

    for (let i = 0, j = 0; i < message.length; i++, j++) {
      const messageEl = message[i];
      const keyEl = fullKey[j];

       if (!alphabet.includes(messageEl)) {
        encryptedMessage += messageEl;
        j--;
        continue;
       }

       const id = alphabet.indexOf(messageEl) + alphabet.indexOf(keyEl);
       encryptedMessage += (id < 26) ? alphabet[id] : alphabet[id - 26];
    }
    
    const reversedEncruptedMesssage = encryptedMessage.split('').reverse().join('');

    return (this.direct === true) ? encryptedMessage : reversedEncruptedMesssage;
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) throw Error('Incorrect arguments!');

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fullKey = key.padEnd(encryptedMessage.length, key);
    let decryptedMessage = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++, j++) {
      const encryptedEl = encryptedMessage[i];
      const keyEl = fullKey[j];

      if (!alphabet.includes(encryptedEl)) {
        decryptedMessage += encryptedEl;
        j--;
        continue;
      }

      const id = alphabet.indexOf(encryptedEl) - alphabet.indexOf(keyEl);
      decryptedMessage += (id >= 0) ? alphabet[id] : alphabet[id + 26];
    }

    const reversedDecruptedMesssage = decryptedMessage.split('').reverse().join('');

    return (this.direct === true) ? decryptedMessage : reversedDecruptedMesssage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
