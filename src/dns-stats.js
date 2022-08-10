const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNSStat = {};

  for (const domain of domains) {
    const domainParts = domain.split(".");
    let subdomain = "";

    for (let i = domainParts.length - 1; i >= 0; i--) {
      const part = domainParts[i];

      subdomain += `.${part}`;
      if (subdomain in DNSStat) {
        DNSStat[subdomain]++;
      } else {
        DNSStat[subdomain] = 1;
      }
    }
  }

  return DNSStat;
}

module.exports = {
  getDNSStats,
};
