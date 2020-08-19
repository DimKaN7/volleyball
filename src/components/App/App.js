import React, {useState} from 'react';

import './App.scss';

import EventCard from '../EventCard/EventCard';
import User from '../../classes/User';
import Event from '../../classes/Event';

export default function App() {
    const [selectedGame, setSelectedGame] = useState(-1);

    const u1 = new User(0, 'Ivan', 'Ivanov');

    const events = [
        new Event('volleyball', 'Изумруд', '25 сентября 2020, 19:00', Array(14).fill(u1, 0, 14), 14, 230),
        // new Event('volleyball', 'Колледж', '26 сентября 2020, 19:00', Array(12).fill(u1, 0, 12), 14, 200)
    ];

    const onClick = (id) => {
        if (id === selectedGame) setSelectedGame(-1);
        else setSelectedGame(id);
    }

    const eventCards = events.map((e, id) => 
        <EventCard key={id} 
                   id={id}
                   event={e}
                   onClick={onClick}
                   selected={id === selectedGame}>
        </EventCard>
    );

    return (
        <div className="app-cont">
            <div className='event-cont'>
                {eventCards}
            </div>
        </div>
    );
}