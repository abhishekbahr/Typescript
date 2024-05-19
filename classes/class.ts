class User{
    email:string
    private name:string
    city:string = ""
    constructor(email:string,city:string){
        this.email = email;
        this.city = city;
    }
}

class Admin extends User{
    isAdmin:boolean
    super(isAdmin:boolean){
        this.isAdmin = isAdmin;
    }
}
const abhishek = new User('abhiktd@gmail.com','abhishek')

abhishek.city = 'ghaziabad'

export {}