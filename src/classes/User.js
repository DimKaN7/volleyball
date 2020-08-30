export default class User {
    constructor(id, fName, sName, admin=false, login, password) {
        this.id = id;
        this.fName = fName;
        this.sName = sName;
        this.admin = admin;
        this.login = login;
        this.password = password;
    }

    toObject = () => {
        return (
            {
                id: this.id,
                fName: this.fName,
                sName: this.sName,
                admin: this.admin,
                login: this.login,
                password: this.password,
            }
        )
    }
}