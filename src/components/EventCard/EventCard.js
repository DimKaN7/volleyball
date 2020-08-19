import React from 'react';
import {CSSTransition} from 'react-transition-group';

import './EventCard.scss';

import CardTitle from './CardTitle/CardTitle';
import Members from './Members/Members';

export default function EventCard(props) {
    const {event, onClick, selected, id} = props;

    return (
        <div className={`card-cont${selected ? ' selected' : ''}`}>
            <CardTitle event={event}
                       onClick={onClick}
                       id={id}></CardTitle>
                <div className='members-wrapper'>
                    <CSSTransition
                        in={selected}
                        unmountOnExit
                        timeout={400}
                        classNames='members'>
                            <Members members={event.members} maxMembers={event.maxMembers}></Members>
                    </CSSTransition>
                </div>
        </div>
    );
}