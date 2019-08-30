//가장 상위 컨포넌트

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Board from '../components/board/Board';
import Main from '../components/main/Main';
import Nav from '../components/nav/Nav';
import {Route} from 'react-router-dom';

const Root = () => (
    < BrowserRouter>
        <Nav/>
        <Route exact path="/" component={Main}/>
        <Route path="/board" component={Board}/>
    </BrowserRouter>
);

export default Root;
