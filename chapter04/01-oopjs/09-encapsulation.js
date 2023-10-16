// TODO: Implementation of Encapsulation

class User {
    constructor(props) {
        // prop is object, because it is better that way
        let { email, password } = props;
        this.email = email;
        this.encryptedPassword = this.#encrypt(password);
        // We won't save the plain password
    }

    // Private method
    #encrypt = (password) => {
        return `encrypte-version-of-${password}`;
    }

    // Getter
    #decrypt = () => {
        const decryptedPassword = this.encryptedPassword.split(`encrypte-version-of-`)[1];
        return decryptedPassword;
    }

    authenticate(password) {
        return this.#decrypt() === password; // will return true or false
    }

}

let Bot = new User({
    email: "bot@mail.com",
    password: "123456"
});

const isAuthenticated = Bot.authenticate("123456");
console.log(isAuthenticated); 