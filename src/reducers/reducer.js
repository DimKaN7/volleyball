const initialState = {
    selectedEvent: -1,
    events: [],
    users: [],
}

const reducer = (state=initialState, action) => {
    switch (action.type) {

        case 'SET_EVENTS':
            return {
                selectedEvent: state.selectedEvent,
                events: action.payload,
                users: state.users,
            };

        case 'SET_USERS':
            return {
                selectedEvent: state.selectedEvent,
                events: state.events,
                users: action.payload
            };
        
        case 'SET_SELECTED_EVENT':
            return {
                events: state.events,
                selectedEvent: action.payload,
                users: state.users,
            }
        case 'DELETE_MEMBER':
            const {eId, mId} = action.payload;
            let event = state.events.find((_, index) => index === eId);
            event.members = [...event.members.slice(0, mId),
                            ...event.members.slice(mId + 1)];
            const result = [...state.events.slice(0, eId),
                            event, 
                            ...state.events.slice(eId + 1)];

            return {
                selectedEvent: state.selectedEvent,
                events: result,
                users: state.users,
            };

        default: 
            return state;
    }
}

export default reducer;