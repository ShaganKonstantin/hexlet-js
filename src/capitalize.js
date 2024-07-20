const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstLetter = text[0].toUpperCase();
  const restText = text.slice(1);
  return `${firstLetter}${restText}`;
};

export default capitalize;
