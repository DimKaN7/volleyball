import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './CardTitle.scss';

import Marquee from '../../Marquee/Marquee';
import {getImages, getIcon} from '../../../tools/tools';
import {setSelectedEvent} from '../../../actions/actions';

function CardTitle(props) {
    const {event, index, selectedEvent, setSelectedEvent} = props;

    const [width, setWidth] = useState(0);

    const context = require.context('../../../icons/event/', false, /\.(png)$/);
    const iconsPaths = getImages(context);

    useEffect(() => {
        window.addEventListener('resize', update);
        setWidth(window.innerWidth);

        return () => {
            window.removeEventListener('resize', update);
        }
    }, []);

    const update = () => {
        const w = window.innerWidth;
        setWidth(w);
    }
    const onClick = (index) => {
        if (index === selectedEvent) setSelectedEvent(-1);
        else setSelectedEvent(index);
    }

    return (
        <div className='card-title' onClick={() => onClick(index)}>
            <div className='card-info'>
                <div className='card-info-part'>
                    <img src={getIcon(iconsPaths, 'location')}></img>
                    <Marquee string={event.location} fontSize={18.5} width={width}></Marquee>
                </div>
                <div className='card-info-part'>
                    <img src={getIcon(iconsPaths, 'clock')}></img>
                    <Marquee string={event.time} fontSize={17.5} width={width}></Marquee>
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

const mapStateToProps = ({events, selectedEvent}) => {
    return {
        events,
        selectedEvent
    }
}

const mapDispatchToProps = {
    setSelectedEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(CardTitle);