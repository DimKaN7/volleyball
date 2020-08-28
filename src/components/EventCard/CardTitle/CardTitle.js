import React, {useState, useEffect} from 'react';

import './CardTitle.scss';

import Marquee from '../../Marquee/Marquee';
import {getImages, getIcon} from '../../../tools/tools';

export default function CardTitle(props) {
    const {event, onClick, id} = props;

    const [width, setWidth] = useState(0);

    const context = require.context('../../../icons/event/', false, /\.(png)$/);
    const iconsPaths = getImages(context);

    const update = () => {
        const w = window.innerWidth;
        setWidth(w);
    }

    useEffect(() => {
        window.addEventListener('resize', update);
        setWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', update);
        }
    }, []);

    return (
        <div className='card-title' onClick={() => onClick(id)}>
            <div className='card-info'>
                <div className='card-info-part'>
                    <img src={getIcon(iconsPaths, 'location')}></img>
                    <Marquee string={event.location} fontSize={18.5} width={width}></Marquee>
                    {/* <span>{event.location}</span> */}
                </div>
                <div className='card-info-part'>
                    <img src={getIcon(iconsPaths, 'clock')}></img>
                    <Marquee string={event.time} fontSize={17.5} width={width}></Marquee>
                    {/* <span>{event.time}</span> */}
                </div>
                <div className='card-info-part'>
                    <img src={getIcon(iconsPaths, 'group')}></img>
                    <span>{event.members.length}/{event.maxMembers}</span>
                </div>
                <div className='card-info-part'>
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