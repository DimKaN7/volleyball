import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './App.scss';

import Header from '../Header/Header';
import EventCard from '../EventCard/EventCard';
import Loader from '../Loader/Loader';
import {db} from '../../firebase';
import {setEvents} from '../../actions/actions';

function App(props) {
    // const [selectedEvent, setSelectedEvent] = useState(-1);
    // const [events, setEvents] = useState([]);
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    const { events, setEvents,
        selectedEvent } = props;

    useEffect(() => {
        const unsubscribeEvents = db.collection('events').onSnapshot(snap => {
            setEvents(snap.docs.map(doc => doc.data()));
        });

        return () => {
            unsubscribeEvents();
        }
    }, []);

    const eventCards = events && events.map((e, id) => {
        return (
            <EventCard key={id} 
                    id={id}
                    event={e}
                    selected={id === selectedEvent}>
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

const mapStateToProps = ({selectedEvent, events}) => {
    return {
        selectedEvent,
        events,
    }
}

const mapDispatchToProps = {
    setEvents,
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);