import React, {Component} from 'react';
import SideBar from './SideBar';
import {Route} from 'react-router-dom';
import Notice from './incontent/notice/Notice';
import Promotion from './incontent/promotion/Promotion';
import Life from './incontent/life/Life';
import Delivery from './incontent/delivery/Delivery';
import Free from './incontent/free/Free';
import Lost from './incontent/lost/Lost';
import ContentsName from './ContentsName';

import NoticePost from './incontent/notice/NoticePost';
// import NoticeDetail from './incontent/notice/Notice_detail';
import NoticeLink from './incontent/notice/NoticeLink';


class Board extends Component {
    render(){
        return(
            <div>   
                /Board안 입니다~/
                <SideBar/>
                <ContentsName/>
                <Route path="/board/SPNU_notice" component={Notice}/>
                <Route path="/board/SPNU_notice/post" component={NoticePost} /> 
                <Route path="/board/SPNU_notice/:id" component={NoticeLink} />
                
                
                <Route path="/board/SPNU_promotion" component={Promotion}/>
                <Route path="/board/SPNU_life" component={Life}/>
                <Route path="/board/SPNU_delivery" component={Delivery}/>
                <Route path="/board/SPNU_free" component={Free}/>
                <Route path="/board/SPNU_lost" component={Lost}/>
            </div>
        );
    }
}

export default Board;



