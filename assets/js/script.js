let difficult = document.querySelectorAll(".card .range");
for(bar of difficult){
    bar.value= bar.classList[1];
}

let axe = [12,5,1,"rzrf","da",4];
let tell = (x)=>x.map(x=> if( x%1){x}else{Nan};);