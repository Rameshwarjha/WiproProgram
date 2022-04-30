const req1=new XMLHttpRequest();
req1.open("GET","https://jsonplaceholder.typicode.com/users");
req1.send();
req1.onload=()=>{
    if(req1.status===200){
        let data=JSON.parse(req1.response);
        console.log(data);
        document.getElementById("para").innerHTML=data;
    }else{
        console.log(`error ${req1.status}`);
    }
}
