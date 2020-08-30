export const setEvents = (events) => {
    return {
        type: 'SET_EVENTS',
        payload: events,
    };
};
export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users,
    }
}
export const setSelectedEvent = (id) => {
    return {
        type: 'SET_SELECTED_EVENT',
        payload: id,
    }
} 
export const deleteMember = (eId, mId) => {
    return {
        type: 'DELETE_MEMBER',
        payload: {eId, mId},
    }
}