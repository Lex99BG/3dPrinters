import React, { useEffect } from 'react';
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col } from 'reactstrap'

import {motion} from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from "react-redux"

import { Link } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state=> state.cart.totalAmount)

  useEffect(() => {
    // Save cart items to local storage whenever cart items change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Helmet title="Количка">
      <CommonSection title="Количка"/>

      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ? 
                ( <h2 className='fs-4 text-center'>Няма добавени продукти!</h2> ) : 
                ( <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Снимка</th>
                    <th>Заглавие</th>
                    <th>Цена</th>
                    <th>Брой</th>
                    <th>Изтрий</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    cartItems.map((item,index)=>(
                     <Tr item={item} key={index}/>
                    ))
                  }
                </tbody>
              </table> )
              }
            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>Междинна сума 
                <span className='fs-4 fw-bold'>{totalAmount} лв.</span>
                </h6>
                
              </div>
              <p className='fs-6 mt-2'>данъците и доставката ще бъдат изчислени при плащане</p>
              <div>
                { cartItems.length === 0 ? ( "" ) : (<button className='buy__btn w-100'><Link to='/checkout'>Завършете поръчката</Link></button>) }
                <button className='buy__btn w-100 mt-3'><Link to='/shop'>Продължете Пазаруването</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({item})=>{

  const dispatch = useDispatch()
  const deleteProduct = ()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td><motion.i whileTap={{ scale: 1.2 }} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i></td>
    </tr>
  )
}

export default Cart;
