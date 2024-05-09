import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';


const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOrder = () => {
    // Save form data to local storage
    localStorage.setItem("orderData", JSON.stringify(formData));

    // Save cart items to local storage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setFormData({
      name: "",
      email: "",
      phone: "",
      streetAddress: "",
      city: "",
      postalCode: "",
      country: ""
    });
    toast.success('Поръчката е Създадена!')
    location.reload();
  };

  return (
    <Helmet title='Касова линия'>
      <CommonSection title='Касова линия' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Данни за плащане</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Въведете вашето име' name="name" value={formData.name} onChange={handleChange} required />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder='Въведете своя имейл' name="email" value={formData.email} onChange={handleChange} required/>
                </FormGroup>
                
                <FormGroup className='form__group'>
                  <input type="number" placeholder='Телефонен номер' name="phone" value={formData.phone} onChange={handleChange} required/>
                </FormGroup>
                    
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Адрес на улица' name="streetAddress" value={formData.streetAddress} onChange={handleChange} required/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='Град' name="city" value={formData.city} onChange={handleChange} required/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder='Пощенски код' name="postalCode" value={formData.postalCode} onChange={handleChange} required/>
                </FormGroup>
                
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Държава' name="country" value={formData.country} onChange={handleChange} required/>
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="cechout__cart">
                <h6>Oбщо Kоличество: <span>{totalQty} артикули</span></h6>
                <h6>Междинна сума: <span>{totalAmount} лв.</span></h6>
                <h6><span>Доставка: <br /> Безплатна Доставка</span> <span>0 лв.</span></h6>
                <h4>Крайна цена: <span>{totalAmount} лв.</span></h4>
                <button className='btn__order auth__btn w-100' onClick={handleOrder}>Направите поръчка</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
