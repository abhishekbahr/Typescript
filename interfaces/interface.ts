interface User { 
    dbId?: number,
    email : string,
    userId : number,
    // startTrial : () => string
    startTrial() : string
}
const abhishek : User = {email:"abhiktd15@gmail.com",userId: 123,startTrial:() => {return "trial started"}}
