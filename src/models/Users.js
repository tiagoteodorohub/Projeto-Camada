class User {
    #id;
    #name;
    #email;
    #password;

    constructor(name, email, password, id = null){
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#id = id;
    }

    get id (){
        return this.#id;
    }

    //name
    get name (){
        return this.#name;
    }

    set name (value){
        this.#name = value;
    }

    //email
    get email (){
        return this.#email
    }

    set email (value){
        return this.#email = value;
    }

    //password
    get password (){
        return this.#password
    }

    set email (value){
        return this.#password = value;
    }

}

export default User;