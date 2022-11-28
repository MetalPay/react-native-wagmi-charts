import { createContext } from 'react';

export const LineChartPathContext = createContext({
  color: '',
  isInactive: false,
  isTransitionEnabled: true,
});
