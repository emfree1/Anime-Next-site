export const getLocaleDate = () => {
  const date = new Date();

  const day = date.getDate();

  const month = date.toLocaleString('en-US', { month: 'long' });

  const shortMonth = date.toLocaleString('en-US', { month: 'short' });

  return { day, month, shortMonth };
};
