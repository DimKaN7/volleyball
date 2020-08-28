import React, {useState, useEffect} from 'react';
import {v4} from 'uuid';

import './App.scss';

import Header from '../Header/Header';
import EventCard from '../EventCard/EventCard';
import User from '../../classes/User';
import Event from '../../classes/Event';

export default function App() {
    const [selectedGame, setSelectedGame] = useState(-1);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const members = [];
        for (let i = 0; i < 15; i++) {
            const user = new User(v4(), `User`, `${i}`);
            members.push(user);
        }
        setUsers(members);
    }, []);

    const events = [
        new Event('volleyball', 'Изумруд, Чернышевского 17', '25 сентября 2020, 19:00', users, 12, 230),
        // new Event('volleyball', 'Колледж', '26 сентября 2020, 19:00', Array(12).fill(u1, 0, 12), 14, 200)
    ];

    const onClick = (id) => {
        if (id === selectedGame) setSelectedGame(-1);
        else setSelectedGame(id);
    }
    const deleteMember = (uuid) => {
        const index = users.findIndex(u => u.id === uuid);
        const newUsers = [...users.slice(0, index), ...users.slice(index + 1)];
        setUsers(newUsers);
    }

    const eventCards = events.map((e, id) => 
        <EventCard key={id} 
                   id={id}
                   event={e}
                   onClick={onClick}
                   deleteMember={deleteMember}
                   selected={id === selectedGame}>
        </EventCard>
    );

    return (
        <div className="app-cont">
            <Header></Header>
            <div className='event-cont'>
                {eventCards}
            </div>
        </div>
    );
}