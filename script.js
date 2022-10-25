
var div=document.createElement("div");
div.setAttribute("id", "main");

var span=document.createElement("span")


function day(a){
    return new Promise((resolve,reject)=>setTimeout(()=>{
    resolve(a-1);
    },1000))
    }
day(11).then((data)=>{
div.innerHTML = (data)
    return day(data)
}).then((data1)=>{
    div.innerHTML = (data1)
    return day(data1)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data2)=>{
   div.innerHTML = (data2)
    return day(data2)
}).then((data3)=>{
   div.innerHTML = (data3)
  
   
})





div.append(span)
document.body.append(div)

// div.innerHTML=day();