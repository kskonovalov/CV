import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Skills from './Skills';

it('renders without crashing', () => {
  const div = document.createElement('div');
  act(() => {
    const root = createRoot(div);
    root.render(<Skills />);
    root.unmount();
  });
});
