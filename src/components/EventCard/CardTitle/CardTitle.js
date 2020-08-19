import React from 'react';

import './CardTitle.scss';

import {getImages, getIcon} from '../../../tools/tools';

export default function CardTitle(props) {
    const {event, onClick, id} = props;

    const context = require.context('../../../icons/', false, /\.(png)$/);
    const iconsPaths = getImages(context);

    return (
        <div className='card-title' onClick={() => onClick(id)}>
            <div className='card-info'>
                <div>
                    <img src={getIcon(iconsPaths, 'location')}></img>
                    <span>{event.location}</span>
                </div>
                <div>
                    <img src={getIcon(iconsPaths, 'clock')}></img>
                    <span>{event.time}</span>
                </div>
                <div>
                    <img src={getIcon(iconsPaths, 'group')}></img>
                    <span>{event.members.length}/{event.maxMembers}</span>
                </div>
                <div>
                    <img src={getIcon(iconsPaths, 'money')}></img>
                    <span>{event.payment}</span>
                </div>
            </div>
            <div className='card-icon'>
                <img src={getIcon(iconsPaths, 'volleyball')}></img>
            </div>
        </div>
    );
}