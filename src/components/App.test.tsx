import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    const root = createRoot(div);
    root.render(<App />);
    root.unmount();
  });
});
