import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './App.scss';

import Header from '../Header/Header';
import EventCard from '../EventCard/EventCard';
import Loader from '../Loader/Loader';
import {db} from '../../firebase';
import {setEvents, setUsers} from '../../actions/actions';

import User from '../../classes/User';
import Event from '../../classes/Event';

function App(props) {

    const { events, setEvents,
            users, setUsers,
        selectedEvent } = props;

    // initializeUsers
    // for (let i = 0; i < 20; i++) {
    //     setTimeout(() => {
    //         const id = (new Date()).getTime().toString();
    //         const user = new User(
    //             id,
    //             'user',
    //             `${i}`,
    //             i === 0,
    //             `user ${i}`,
    //             'pass'
    //         );
    //         db.collection('users').doc(id).set(user.toObject());
    //     }, 1000);
    // }

    useEffect(() => {
        const unsubscribeEvents = db.collection('events').onSnapshot(snap => {
            setEvents(snap.docs.map(doc => doc.data()));
        });
        const unsubscribeUsers = db.collection('users').onSnapshot(snap => {
            setUsers(snap.docs.map(doc => doc.data()));
        });

        return () => {
            unsubscribeEvents();
            unsubscribeUsers();
        }
    }, []);

    const eventCards = events && events.map((e, index) => {
        return (
            <EventCard key={index} 
                    index={index}
                    event={e}
                    selected={index === selectedEvent}>
            </EventCard>
        );
    });

    return (
        <div className="app-cont">
            <Loader loading={false}>
                <Header></Header>
                <div className='event-cont'>
                    {eventCards}
                </div>
            </Loader>
        </div>
    );
}

const mapStateToProps = ({selectedEvent, events, users}) => {
    return {
        selectedEvent,
        events,
        users,
    }
}

const mapDispatchToProps = {
    setEvents,
    setUsers,
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);