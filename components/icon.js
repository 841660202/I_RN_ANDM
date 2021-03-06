import React from 'react';
import {Grid, Icon} from 'antd-mobile-rn';

const list = [
    'check-circle',
    'check',
    'check-circle-o',
    'cross-circle',
    'cross',
    'cross-circle-o',
    'up',
    'down',
    'left',
    'right',
    'ellipsis',
];

export default class IConDemo extends React.Component {
    render() {
        const data = list
            .map(item => ({
                icon: <Icon type={item}/>,
                text: item,
            }))
        return <Grid data={data} columnNum={3} hasLine={false}/>;
    }
}

export const title = 'Icon';
export const description = 'Icon Example';
