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


var x = 0
var y = 0 
let time1 = document.getElementById("time1")
let setTime1=()=>{
    let xx=0
    let yy=0
    if(x<10){
        xx="0"+x
    }else{xx=x}
    if(y<10){
        yy="0"+y
    }else{
        yy=y
    }

    y++
    if(y>59){
        x++
        y=0
    }
    time1.innerHTML= xx+":"+yy
    
}
let updateTime1=()=>{
    myVar1 = setInterval(setTime1, 1000);
}
let stopTime1=()=>{
    time1.innerHTML="00:00"
    clearInterval(myVar1)
}
var q = 0
var e = 0 
let time2 = document.getElementById("time2")
let setTime2=()=>{
    let qq=0
    let ee=0
    if(q<10){
        qq="0"+q
    }else{qq=q}
    if(e<10){
        ee="0"+e
    }else{
        ee=e
    }

    e++
    if(e>59){
        q++
        e=0
    }
    time2.innerHTML= qq+":"+ee
    
}
let updateTime2=()=>{
    myVar2 = setInterval(setTime2, 1000);
}
let stopTime2=()=>{
    time2.innerHTML="00:00"
    clearInterval(myVar2)
}