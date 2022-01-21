import { useParams } from "react-router-dom";

export const Details=()=>{
    const {id}=useParams();
    //console.log('i am logo');
    //console.log(id);

    var arr=JSON.parse(localStorage.getItem('arr'));
    //console.log(arr);
    var res;
    for(var i=0;i<arr.length;i++){
       var a=arr[i].id;
       if(a==id){
           res=arr[i];
           break;
       }
    }
    console.log(res);
    return (
    <>
    <h1>Product   :{id}</h1>
    
    <div>id     : {res.id}</div>
    <div>name     : {res.name}</div>
    <div>details     : {res.details}</div>
    <div>price      :{res.price}</div>
    </>
    )
}