import { getLocale } from '../utils/getLocale.js';

/**
 * To get the decimal separator
 *
 * @param {string} [locale] To override the browser locale
 * @returns {string} The separator
 */
export function getDecimalSeparator(locale) {
  const computedLocale = getLocale(locale);
  const formattedNumber = Intl.NumberFormat(computedLocale, {
    style: 'decimal',
    minimumFractionDigits: 1,
  }).format(1);
  return formattedNumber[1];
}
