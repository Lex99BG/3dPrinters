import '../styles/home.css'
import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'

import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import products from '../assets/data/products'

import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import Clock from '../components/UI/Clock'
import { useEffect, useState } from 'react'

import counterImg from '../assets/images/counter-timer-img.png'

const HomeScreen = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(()=>{
    const filterdTrendingProducts = products.filter(item=> item.category === 'Принтери за смола');
    const filterdBestSalesProducts = products.filter(item=> item.category === 'FDM принтери');
    const filterdMobileProducts = products.filter(item=> item.category === 'FDM принтери');
    const filterdWirelessProducts = products.filter(item=> item.category === 'FDM принтери');
    const filterdPopularProducts = products.filter(item=> item.category === 'FDM принтери');
    setTrendingProducts(filterdTrendingProducts)
    setBestSalesProducts(filterdBestSalesProducts)
    setMobileProducts(filterdMobileProducts)
    setWirelessProducts(filterdWirelessProducts)
    setPopularProducts(filterdPopularProducts)
    
  }, [])
  return (
    <Helmet title={'Начало'}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Популярен продукт през {year}</p>
                <h2>създайте нещо удивително с нашите 3D принтери</h2>
                <p>Нашата мисия е да направим клиента доволен с високо качество и разумни цени.</p>
                <button className="buy__btn"><Link to='/shop'>Купете Сега</Link></button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services/>

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Популярни продукти</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Най-продавани</h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Лимитирани Оферти</h4>
                <h3 className='text-white fs-5 mb-3'>Качествени Принтери</h3>
              </div>
              <Clock/>

              <button className="buy__btn store__btn"><Link to='/shop'>Разгледайте</Link></button>
            </Col>
            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt="Counter Img"/>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>Нови Попълнения</h2>
            </Col>
            <ProductsList data={mobileProducts}/>
            <ProductsList data={wirelessProducts}/>
          </Row>
        </Container>
      </section>

      <section className='popular__category'>
      <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>Популярни в категорията</h2>
            </Col>
            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default HomeScreen