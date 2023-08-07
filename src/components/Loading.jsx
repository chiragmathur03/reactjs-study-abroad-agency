import React from 'react';
import { Spin } from 'antd';

const Loading = ({message}) => {
    return (
        <Spin tip={message}/>
    )
}

export default Loading