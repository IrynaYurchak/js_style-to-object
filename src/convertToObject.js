'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(code) {
  const strings = code.split(';');
  const styles = {};

  for (let i = 0; i < strings.length; i++) {
    const [key, value] = strings[i].split(':');

    if (key && value) {
      styles[key.trim()] = value.trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
