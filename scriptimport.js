var p1=fetch("https://restcountries.com/v3.1/all") //it is a promise
.then((data)=> data.json())//again here it is a promise

.then((data1)=>foo(data1));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
       
        var div=document.createElement("div");
        div.innerHTML=`Countryname:${data1[i].name.common} another:${data1[i].borders[0]}  country code:${data1.altspellings[0]} `;
        document.body.append(div);
    }

}