import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import 'semantic-ui-css/semantic.min.css';
import { store } from './store/index.js'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
