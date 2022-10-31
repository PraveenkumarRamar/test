var h1=document.createElement("h1");
h1.setAttribute("id","main");
h1.style.textAlign="center";
h1.style.marginTop="7em"



function fo(a){
    return new Promise((res,rej)=>setInterval(() => {
        
        res(a-1)
    },1000))
}
fo(11).then((data)=>{
    h1.innerHTML = data;
    return fo(data)
})
.then((data1)=>{
    h1.innerHTML=data1
    return fo(data1)
})
.then((data2)=>{
    h1.innerHTML=data2
    return fo(data2)
})
.then((data3)=>{
    h1.innerHTML=data3
    return fo(data3)
})
.then((data4)=>{
    h1.innerHTML=data4
    return fo(data4)
})
.then((data5)=>{
    h1.innerHTML=data5
    return fo(data5)
})

.then((data6)=>{
    h1.innerHTML=data6
    return fo(data6)
})
.then((data7)=>{
    h1.innerHTML=data7
    return fo(data7)
})
.then((data8)=>{
    h1.innerHTML=data8
    return fo(data8)
})
.then((data9)=>{
    h1.innerHTML=data9
    return fo(data9)
}).then((data10)=>{
    h1.innerHTML=data10
    return fo(data10)
})
.then((data0)=>{
    h1.innerHTML=data0

if(data0==-1){
       
       h1.innerHTML="Happy Independence Day"

    }
    else{
        console.log("no")
    }

})





document.body.append(h1);