import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';


const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);
  const removeToCart = (id) => {
    dispatch(remove(id))
  }
  
  const cards = products && products.map(product => {
    return <div className='col-md-12' style={{marginBottom: '20px'}}>
     <Card key={product.id} className='h-100'>
      <div className='text-center'>
      <Card.Img variant="top" src={product.images[0]} style={{width: '100px', height: '130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer style={{background: 'white'}}>
      <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
      </Card.Footer>
     </Card>
    </div>
  })
  return (
    <>
    <div className='row'>
      {cards}
    </div>
    </>
  )
}

export default Cart