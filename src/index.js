import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewChirpForm from './components/NewChirpForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewChirpForm />, document.getElementById('root'));
registerServiceWorker();
