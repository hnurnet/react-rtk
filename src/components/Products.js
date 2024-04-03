import React, { useState } from 'react'
import {useGetSingleProductQuery} from "../store/productSlice";
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {add} from "../store/cartSlice";


const Products = () => {
  const dispatch = useDispatch();
  const [input,setInput] = useState('');
  const {data: products, isLoading, isError} = useGetSingleProductQuery(input);

  if(isLoading){
    return <div><h1>Loading ...</h1></div>
  }
  if(isError){
    return <div>Error accord</div>
  }

  const addToCart = (product) => {
    dispatch(add(product))
  }
  
  const cards = products && products.products.map(product => {
    return <div className='col-md-3' style={{marginBottom: '20px'}}>
     <Card key={product.id} className='h-100'>
      <div className='text-center mt-2'>
      <Card.Img variant="top" src={product.images[0]} style={{width: '100px', height: '130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{background: 'white'}}>
      <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
      </Card.Footer>
     </Card>
    </div>
  })
  



  return (
    <div>
      <input type='text' className="mb-3 rounded" 
      placeholder='Search Product ...' 
      style={{width: '320px'}} onChange={(e) =>setInput(e.target.value)}/>
      <div className='row'>
      {cards}
    </div>

    </div>
  )
}

export default Products;