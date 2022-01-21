import { Link } from "react-router-dom";

var arr=[{id:1,name:'product1',details:'details of product1',price:100},
         {id:2,name:'product',details:'details of product2',price:200},
         {id:3,name:'product',details:'details of product3',price:300},   
         {id:4,name:'product',details:'details of product4',price:400},   
         {id:5,name:'product',details:'details of product5',price:500},   
         {id:6,name:'product',details:'details of product6',price:600},   
         {id:7,name:'product',details:'details of product7',price:700},       ]                                          

localStorage.setItem('arr',JSON.stringify(arr));
var arr1=[1,2,3,4,5,6,7];
export const All=(e)=>{
    return (
    <>
    <div>All products</div>
    {arr1.map((e,i)=>(
    <div key={i}>
    <Link to={`/all/${e}`}>Product {i}</Link>
    </div>
    ))}
    </>
        );
}