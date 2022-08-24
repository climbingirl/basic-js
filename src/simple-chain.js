const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    let link = (arguments.length > 0) ? `( ${value} )` : '( )';

    if (this.chain.length > 0) {
      this.chain += `~~${link}`;
    } else {
      this.chain += link;
    }

    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.chain = '';
      throw Error(`You can't remove incorrect link!`);
    }

    const links = this.chain.split('~~');
    links.splice(--position, 1);
    this.chain = links.join('~~');

    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');

    return this;
  },
  finishChain() {
    const chain = this.chain;
    this.chain = '';
    return chain;
  }
};

module.exports = {
  chainMaker
};
