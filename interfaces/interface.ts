// interface User { 
//     dbId?: number,
//     email : string,
//     userId : number,
//     // startTrial : () => string
//     startTrial() : string
// }
// const abhishek : User = {email:"abhiktd15@gmail.com",userId: 123,startTrial:() => {return "trial started"}}


interface TakePhoto{
    cameraMode : string,
    filter : string,
    burst : number
}
interface Story{
    createStory() : void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ){}
}

class Youtube implements TakePhoto , Story{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number,
        public short : string,
        public createStory : void
    ){}
}

