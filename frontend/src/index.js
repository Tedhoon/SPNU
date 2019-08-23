import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//Router
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Components
import SpnuNotice from './components/SPNU_notice/SPNU_notice';



ReactDOM.render(

    <Router>
        <Route exact path='/SPNU_notice' component={SpnuNotice} />
        {/* <Route exact path='/<int:id>' */}
    </Router>

    , document.getElementById('root'));

serviceWorker.unregister();
