
// eslint-disable-next-line no-unused-vars
import React,{useRef, useEffect} from 'react';

import './header.css'

import logo from '../../assets/images/eco-logo.png' 
import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const nav__links = [
  {
    path: 'home',
    display: 'Начало',
  },
  {
    path: 'shop',
    display: 'Магазин',
  },
  {
    path: 'cart',
    display: 'Количка',
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity = useSelector(state=> state.cart.totalQuantity)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')
  const navigateToCart = ()=> {navigate('/cart')}
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt='Logo' />
              <div>
                <h1>Printiverse 3D</h1>
              </div>
            </div>
            
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                  </li>
                  ))
                }
              </ul>
            </div>

            <div className='nav__icons'>
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              <span><a href="tel:+359886747088">+359886747088</a></span>
              <div className="mobile__menu">
              <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
            </div>
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header