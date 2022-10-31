var container = document.createElement("div")
container.setAttribute("class","container")

var row = document.createElement("row")
row.setAttribute("class","row")
container.append(row)

var res = fetch("https://restcountries.com/v2/all").then((data)=>data.json())
.then((data1)=>{console.log(data1)
for(var i in data1){
    row.innerHTML +=`<div class="col-sm-3">
    <div class="card-header">
    <h5 class="card-title">${data1[i].name}</h5>
      <img src="${data1[i].flag}" class="card-img-top" alt="...">
      <div class="card-body">
        <div>CAPITAL :${data1[i].capital}</div>
        <div>REGION :${data1[i].region}</div>
        <div>COUNTRY CODE :${data1[i].cioc}</div>
        <button class="btn" onclick="display()">Click weather</button>
      </div>
    </div>
  </div>`
document.body.append(container)
}
async function restd(){
 try {
  for(var ii in data1){
    var latlong = data1[ii].latlng;
    console.log(latlong);
    if(latlong.length === undefined){
      throw new Error("Error / Invalid codes")
    }
    display(...latlong)
  }
 } catch (error) {
  console.log("invalid"+error.message)
 }
}

async function display(lat,lon){
try {
  var res = await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b9d07e8d66a7c9c78d47685619746207`)).json();
  console.log(res.main.temp);
} 
catch (error) {

  console.log(error.message)
  
}
}
restd()



})




