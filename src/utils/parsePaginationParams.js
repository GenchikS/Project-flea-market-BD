
const parseNumber = (number, defaultValue) => {
  const isString = typeof number === 'string';
  if (!isString) return defaultValue;
  // перетворення рядка на число
  const parsedNumber = parseInt(number);

  // якщо значення не число, то повертаємо defaultValue
  if (Number.isNaN(parseNumber)) {
    return defaultValue;
  }

  return parseNumber;
}


export const parsePaginationParams = (query) => {
    const { page, perPage } = query;

    const parsedPage = parseNumber(page, 1);
    const parsedPerpage = parseNumber(perPage, 5);

    return {
        page: parsedPage,
        perPage: parsedPerpage
    }
}
