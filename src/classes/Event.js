export default class Event {
    constructor(id, sport, location, 
        time, members, maxMembers, payment) {
        this.id = id;
        this.sport = sport;
        this.location = location;
        this.time = time;
        this.members = members;
        this.maxMembers = maxMembers;
        this.payment = payment;
    }

    toObject = () => {
        return (
            {
                id: this.id,
                sport: this.sport,
                location: this.location,
                time: this.time,
                members: this.members,
                maxMembers: this.maxMembers,
                payment: this.payment,
            }
        )
    }
}