import React, {Component} from 'react';
import Icon from './Icon';

class Icons extends Component {
    render(){
        return(
            <div>
                <Icon id="공지사항" />
                <Icon id="홍보게시판" />
                <Icon id="생자대생활" />
                <Icon id="생자대배달" />
                <Icon id="자유게시판" />
                <Icon id="분실물" />
            </div>
        );
    }
}

export default Icons;