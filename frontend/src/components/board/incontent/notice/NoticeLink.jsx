import React from 'react';
import NoticeDetail from './Notice_detail';


const NoticeLink = ({match}) => {
    return(
        <div>
            <NoticeDetail id={match.params.id} />
        </div>
    )
}

export default NoticeLink;