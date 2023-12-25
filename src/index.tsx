import React from 'react';
import { createRoot } from 'react-dom/client';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/sass/materialize.scss';

import AppRouter from './components/AppRouter';
import './assets/sass/style.sass';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
