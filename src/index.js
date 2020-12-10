import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import {HashRouter} from 'react-router-dom'


ReactDOM.render(<App />, document.getElementById('root'));
<React.StrictMode>
    <HashRouter>
        <App/>
    </HashRouter>
</React.StrictMode>


document.getElementById('root')
