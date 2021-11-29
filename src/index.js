import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('dotenv').config(); // use .env file

ReactDOM.render(
    <App/>
,document.getElementById("root"));