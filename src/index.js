import React from 'react';
import ReactDOM from 'react-dom';
import './layout-template.css';
import MainLayout from './MainLayout';
import Content from './Content';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
    < div >
        <MainLayout / >
        <Content / >
    </div>
, document.getElementById('root'));
registerServiceWorker();