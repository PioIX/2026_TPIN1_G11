const realizarQuery = require('modulos/mysql.js').realizarQuery;

class User{
    constructor(name, mail, password){
        this.name = name;
        this.mail = mail;
        this.password = password;
    }

    async save() {
        try {
            return await realizarQuery(`INSERT INTO Usuarios (name, mail, password) VALUES (${this.name}, ${this.mail}, ${this.password})`);
        } catch(error) {
            console.error(error)
        }        
    }

    static load(mail) {
        try {
            const data = await realizarQuery(`SELECT name, password FROM Usuarios WHERE mail = ${mail})`);

            return new User(data.name, mail, data.password);
        } catch(error) {
            console.error(error)
        }
    }

}

exports.User = User;

const potito = new User('pepito potito', 'potito@soretito.net', 'joete');
potito.save();

const potitoUser = User.load('potito@soretito.net');
console.log(potitoUser)
