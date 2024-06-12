import React from 'react'
// props=>{data}
// export default function ProductCard({data=[],children}) {
  // function sayHello (event){
  //   console.log("hello",event.target);
  // }
 
export default function ProductCard(props ,children) {
  // export default function ProductCard(props,children) {
  return (
    <div>
  {/* {props.children} */}
<div className="card">
  <img src={props.data.imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-warning ">{props.data.title}</h5>
    
    <p className="card-text text-bold fw-bold">{props.data.description}</p>
     {/* {props.children} */}

    <p>{props.data.price >0 ? <span className='text-warning fw-bold'>{props.data.price +"$"} </span>: <span className='text-danger fw-bold'>free</span> } </p>

    {/* <p>{props.data.price >0 && <span className='text-warning fw-bold'>{props.data.price +"$"} </span> } </p> */}
    {/* <button href="#" className="btn btn-primary"
     onClick={sayHello}>Add To Cart</button> */}
    <button href="#" className="btn btn-primary" 
    onClick={(event)=>{
      addTOCart(event,props.data)
    }}>Add To Cart</button>

    {/* <button className='btn btn-primary' onClick={sayHello}>Click</button> */}
    {/* <button onClick={(event)=>{
      addTOCart(event,props.data)
    }}>AddToCart</button> */}

  </div>
</div>

    </div>
  )

 
}

// function sayHello() {
//   console.log("hello");
  
// }
function addTOCart(event,data) {
  // console.log(event.target);
  console.log(data);
  // let cards=[];
  let cards=JSON.parse(localStorage.getItem('cards'))??[]
  cards.push(data??[]);
  localStorage.setItem('cards',JSON.stringify(cards));
  console.log(`product+${data.id}+added`);

 }
// function addTOCart(event,data)
// {
//   let cards=JSON.parse(localStorage.getItem('cards'))??[]
//   cards.push(data);
//   localStorage.setItem('cards',JSON.stringify(cards))
//   // console.log(cards);
// // console.log(event.target,data);
// }




//  function showCardData(props) {

//  }
