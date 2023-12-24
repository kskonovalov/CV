import React from 'react';
import { createRoot } from 'react-dom/client';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/sass/materialize.scss';

import AppRouter from './components/AppRouter';
import * as serviceWorker from './serviceWorker';

import './assets/sass/style.sass';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppRouter />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
