// function addTwo(num:number){
//     return num+2
// }

// function getUpper(val:string){
//     return val.toUpperCase()
// }
// function signUpUser(name:string,email:string,isPaid:boolean){}
// let loginUser = (name:string,email:string,isPaid:boolean=false) => {

// }

// addTwo(5)
// getUpper("abhishek")
// signUpUser('abhishek','abhiktd15@gmail.com',false)
// loginUser('abhishek','abhiktd15@gmail.com')

// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return '200 OK'
// }

// const heros = ['thor','spiderman','ironman','panther']
// heros.map((hero): string => {
//     return `hero is ${hero}`
// })

// function consoleError(errmsg:string) : void{
//     console.log(errmsg)
// }

type User = {
    readonly _id : string,
    name : string,
    email : string,
    isActive : boolean,
    creditCardDetails?: number
}
type cardNumber = {
    cardnumber : string,
}
type cardDate = {
    carddate : string
}
type cardDetails = cardNumber & cardDate & {
    cvv : number
}

var myUser : User = {   
    _id : '12321',
    name :"abhishek",
    email : "abhiktd15@gmail.com",
    isActive : false,
};

myUser.email = 'h@gmail.com'



export {}