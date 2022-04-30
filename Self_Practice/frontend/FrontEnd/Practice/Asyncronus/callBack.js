const infoData=[
    {name:"abc",year:"te"},
    {name:"xyz",year:"fe"}
];
function getData(){
    setTimeout(()=>{
        let out="";
        infoData.forEach((item,index)=>{
            out+= `<li>${item.name+ " " +item.year}</li>`
        });
        document.body.innerHTML=out;
    },1000)
}


function createData(newData,callback){
    setTimeout(()=>{
        infoData.push(newData);
        callback();
    },2000);
    
}

getData();
createData({name:"ram",year:"se"},getData)
