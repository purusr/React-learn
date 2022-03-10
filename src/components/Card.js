function Card({key}){
  console.log('I am from function card')
  console.log();
 

  return ( 
    <>
    
       <div className="product-card">  
       <img className='product-image' src=''></img>
       <h4></h4>
       <p>Price:</p>
       <button>Buy Now</button>
       </div> 
   
    </>
    
    
    )

}

export default Card;