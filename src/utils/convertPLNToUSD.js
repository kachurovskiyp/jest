export const convertPLNToUSD = (PLN) => {

  if(PLN === null) {
    return 'Error';
  }

  if(!PLN || typeof PLN === 'string') {
    return NaN;
  }

  if(typeof PLN !== 'string' && typeof PLN !== 'number') {
    return 'Error';
  }

  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}