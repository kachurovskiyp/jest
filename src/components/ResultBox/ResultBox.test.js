import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ResultBox from './ResultBox';
import { formatAmountInCurrency } from '../../utils/formatAmountInCurrency';
import { convertUSDToPLN } from '../../utils/convertUSDToPLN';
import { convertPLNToUSD } from '../../utils/convertPLNToUSD';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  it('should render proper info about conversion when PLN -> USD', () => {
    const amounts = [100, 20, 345, 278];

    for (const amount of amounts) {
      render(<ResultBox from="PLN" to="USD" amount={amount} />);

      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(`${formatAmountInCurrency(amount, 'PLN')} = ${convertPLNToUSD(amount)}`);

      cleanup();
    };
  });

  it('should render proper info about conversion when USD -> PLN', () => {
    const amounts = [100, 20, 345, 278];

    for (const amount of amounts) {
      render(<ResultBox from="USD" to="PLN" amount={amount} />);

      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(`${formatAmountInCurrency(amount, 'USD')} = ${convertUSDToPLN(amount)}`);

      cleanup();
    };
  });

  it('should render proper info about conversion when USD -> USD', () => {
    const amounts = [100, 20, 345, 278];

    for (const amount of amounts) {
      render(<ResultBox from="USD" to="USD" amount={amount} />);

      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(`${formatAmountInCurrency(amount, 'USD')} = ${formatAmountInCurrency(amount, 'USD')}`);

      cleanup();
    };
  });

  it('should render proper info about conversion when PLN -> PLN', () => {
    const amounts = [100, 20, 345, 278];

    for (const amount of amounts) {
      render(<ResultBox from="PLN" to="PLN" amount={amount} />);

      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent(`${formatAmountInCurrency(amount, 'PLN')} = ${formatAmountInCurrency(amount, 'PLN')}`);

      cleanup();
    };
  });
});