// class game{
// constructor(name,player,type){
//     this.name= name
//     this.player = player
//     this.type = type
// }
// play(){
//     console.log(this.type);
//     console.log(this.player)
// }
// }

// let game1 = new game("LOL", "4  " ,"moba")
// game1.play()


var m = 0
var s = 0 
let time = document.getElementById("time")
let setTime=()=>{
    let ss=0
    let mm=0
    if(s<10){
        ss="0"+s
    }else{ss=s}
    if(m<10){
        mm="0"+m
    }else{
        mm=m
    }

    s++
    if(s>59){
        m++
        s=0
    }
    time.innerHTML= mm+":"+ss
    
}
let updateTime=()=>{
    myVar = setInterval(setTime, 1000);
}
let stopTime=()=>{
    time.innerHTML="00:00"
    clearInterval(myVar)
}