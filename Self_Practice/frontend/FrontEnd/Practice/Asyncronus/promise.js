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
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            infoData.push(newData);
            let error=false;
            // let error=true;
            if(!error){
                resolve();
            }else{
                reject("element not added");
            }
        },2000);
    });
}
// getData();
// createData({name:"ram",year:"se"}).then(getData).catch(err=>console.log(err));

async function start(){
    await createData({name:"shyam",year:"ff"});
    getData();
}
start();
