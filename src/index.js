import React from 'react';
import ReactDOM from 'react-dom';

import { defaults } from 'react-chartjs-2';

import './index.css';
import './assets/helpers.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

// Inject Proxima Nova Font
import './assets/fonts/index.css';
defaults.global.defaultFontFamily = `'ProximaNova', sans-serif`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();