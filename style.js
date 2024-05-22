const endDate='27 may 2024'
document.getElementById('end-Date').innerText=endDate
const input= document.querySelectorAll('input') 

// const clock *{}=> {

//}


function timer(){
    const end=new Date(endDate)
 const now=new Date()
const diff=(end-now) / 1000;
console.log(diff);
input[0].value =Math.floor(diff / 3600 / 24);
input[1].value =Math.floor(diff / 3600) % 24;
input[2].value =Math.floor(diff / 60) % 60;
input[3].value =Math.floor(diff) % 60;
}
//initial call
timer()
/**
 * 1 day=24hours
 * 1 hour=60min
 * 60min= 360sec
 */
setInterval(
    ()=>{
        timer()
    },
    1000
)

