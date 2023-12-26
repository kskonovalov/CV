import React from 'react';
import { createRoot } from 'react-dom/client';
import Skills from './Skills';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Skills />);
  root.unmount();
});
