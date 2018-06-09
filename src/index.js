import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './MainLayout';
import Content from './Content';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
    < div >
        <MainLayout / >
        <Content / >
        <Footer />
    </div>
, document.getElementById('root'));
registerServiceWorker();