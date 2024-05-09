// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';

import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import { Link } from 'react-router-dom';

import logo from '../../assets/images/eco-logo.png' 
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className='justify-content-between'>
          <Col lg='4' md='6' className='mb-4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>Printiverse 3D</h1>
              </div>
            </div>
              <p className='footer__text mt-4 text-justify'>Ние предлагаме широка гама от висококачествени 3D принтери, подходящи за всеки - от любители до професионалисти.</p>
          </Col>

          

          <Col lg='2' md='3' className='mb-4'>
            <div className="footer__quick-link">
              <h2 className="quick__links-title">Полезни Линкове</h2>
              <ListGroup className='mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/'>Начало</Link>
                  </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Магазин</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Количка</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='3'  md='4'>
            <div className="footer__quick-link">
              <h2 className="quick__links-title">Контакти</h2>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>гр. София ул.Митрополит Авксентий Велешки 43</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                <span><i className="ri-phone-line"></i></span>
                  <p>+359 88 6747 088</p>
                </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>printverse@gmail.com</p>
                  </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer