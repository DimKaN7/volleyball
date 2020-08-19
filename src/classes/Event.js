export default class Event {
    constructor(sport, location, time, members, maxMembers, payment) {
        this.sport = sport;
        this.location = location;
        this.time = time;
        this.members = members;
        this.payment = payment;
        this.maxMembers = maxMembers;
    }
}