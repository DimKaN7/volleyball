import React from 'react';
import {CSSTransition} from 'react-transition-group';

import './EventCard.scss';

import CardTitle from './CardTitle/CardTitle';
import Members from './Members/Members';

export default function EventCard(props) {
    const {event, selected, index} = props;
    const style = {
        height: event.maxMembers === 12 ? '479px' : '535px',
    }

    return (
        <div className={`card-cont${selected ? ' selected' : ''}`}
            style={selected ? style : null}>
            <CardTitle index={index}
                    event={event}>                           
            </CardTitle>
            <div className='members-wrapper'>
                <CSSTransition
                    in={selected}
                    unmountOnExit
                    timeout={400}
                    classNames='members'>
                        <Members eIndex={index}
                                members={event.members} 
                                maxMembers={event.maxMembers}></Members>
                </CSSTransition>
            </div>
        </div>
    );
}