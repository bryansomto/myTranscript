import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
// import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from "react-router-dom"


ReactDOM.render(
<<<<<<< HEAD
    <MoralisProvider appId="e53Gy9zCV4ek9waF3hKx3eUYt69JOLUffZ1fNYZW" serverUrl="https://zfzdbmbepi6v.usemoralis.com:2053/server">    
        <App />
    </MoralisProvider>, 
    document.getElementById('root'),
=======
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
>>>>>>> bb04038a60067a62f02f6a6dffdf68ab984fb973
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
