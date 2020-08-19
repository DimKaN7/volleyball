import React from 'react';

import './Members.scss';

import Marquee from '../../Marquee/Marquee';

import {getImages, getIcon} from '../../../tools/tools';

export default function Members(props) {
    const {members, maxMembers} = props;

    const context = require.context('../../../icons/', false, /\.(png)$/);
    const iconsPaths = getImages(context);
    const mainMembers = members.slice(0, maxMembers);

    // console.log(pixelWidth(members[0].fName + ' ' + members[0].sName, {size: 16}));

    const main = mainMembers.map((m, id) => 
        <div className='member' key={id}>
            <span className='member-id'>{`${id + 1}. `}</span>
            <Marquee string={`${m.fName} ${m.sName}`}></Marquee>
            <img src={getIcon(iconsPaths, 'delete')}></img>
        </div>
    );

    const reserve = members.slice(maxMembers).map((m, id) => 
        <div className='member' key={id}>
            <span>
                {`${maxMembers + id + 1}. ${m.fName} ${m.sName}`}
            </span>
            <img src={getIcon(iconsPaths, 'delete')}></img>
        </div>
    );

    return(
        <div className='members-cont'>
            <div className='members-type'>
                <span className='title'>Основа</span>
                {main}
            </div>
            <div className='members-type'>
                <span className='title'>Запас</span>
                {reserve}
            </div>
        </div>
    );
}