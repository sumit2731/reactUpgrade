import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Cmp1 from './Cmp1';


test('renders learn react link', async () => {
  render(<Cmp1 showText={false} />);
  const toggleButton = screen.getByText('ShowButton');
  fireEvent.click(toggleButton)
  await waitFor( () => {
    expect(screen.queryByText('Hello')).toBeInTheDocument();
  })
});


