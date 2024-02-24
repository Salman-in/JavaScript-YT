class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}salman`
    }

    set password(value){
        this._password = value
    }
}

const salman = new User("h@salman.ai", "abc")
console.log(salman.email);