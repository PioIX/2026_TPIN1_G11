let cont_idUser=1;
class User{
    constructor(name, mail, password){
        this.name = name;
        this.mail = mail;
        this.password = password;
        this.id = cont_idUser;
        cont_idUser++;
    }

}

let users = [
    new User ("Gyro", "a", "a"),
    new User ("Salla", "jsallaberry@pioix.edu.ar", "XxelsansxX"),
    new User ("Mana sama", "samamana@gmail.com", "gardenia"),
    new User ("Zana", "Zanamanzana@gmail.com", "123manzana")
]
