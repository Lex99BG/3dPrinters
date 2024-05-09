import React,{useState} from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'
const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if(filterValue === 'FDM принтери'){
      const filteredProducts = products.filter(
        (item) => item.category==="FDM принтери"
      );
      setProductsData(filteredProducts)
    }

    if(filterValue === 'Принтери за смола'){
      const filteredProducts = products.filter(
        (item) => item.category==="Принтери за смола"
      );
      setProductsData(filteredProducts)
    }

  }

  const handleSearch = e=>{
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }
  
  const sortAscending = () => {
    const sortedProducts = [...productsData].sort((a, b) => a.price - b.price);
    setProductsData(sortedProducts);
  };

  const sortDescending = () => {
    const sortedProducts = [...productsData].sort((a, b) => b.price - a.price);
    setProductsData(sortedProducts);
  };
  return (
   <Helmet title='Магазин'>
      <CommonSection title='Продукти'/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Филтриране по категория</option>
                  <option value="FDM принтери">FDM принтери</option>
                  <option value="Принтери за смола">Принтери за смола</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className="filter__widget">
            <select onChange={(e) => {
                  e.target.value === "възходящ" ? sortAscending() : sortDescending();
                }}>
                  <option>Сортирай по</option>
                  <option value="възходящ">възходящ</option>
                  <option value="низходящ">низходящ</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search__box">
                <input type="text" placeholder='Търсене......' onChange={handleSearch}/>
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? <h2 className='text-center fs-4'>Няма открити продукти</h2> : <ProductsList data={productsData}/>
            }
          </Row>
        </Container>
      </section>
   </Helmet>
  )
}

export default Shop