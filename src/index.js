import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

// Inject Proxima Nova Font
import './assets/fonts/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();