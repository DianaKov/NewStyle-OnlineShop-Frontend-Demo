import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col} from "react-bootstrap";
import { salePercentage } from '../../../constants';

import './sale.css';


const SaleCategory = () => {
  const [products, setProducts] = useState([]);
  const [category] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const filterSaleProducts = () => {
    if (category) {
      const filteredProducts = products.filter((product) => product.category === category && product.sale === true);
      const uniqueProductsByCategory = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = product;
        }
        return acc;
      }, {});
      return Object.values(uniqueProductsByCategory);
    }
    const filteredProducts = products.filter((product) => product.sale === true);
    const uniqueProductsByCategory = filteredProducts.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = product;
      }
      return acc;
    }, {});
    return Object.values(uniqueProductsByCategory);
  };

  return (
    <div className="card">
    <h1 className="card-name">Акции</h1>
    <Container className="card-sale">
      <Container className="card-sale__left">
        <h2>ЛЕТНИЕ СКИДКИ -{salePercentage}%</h2>
        <div>Наша летняя распродажа уже заканчивается. Поспешите воспользоваться самыми 
          горячими ценами.</div>
        <Button className="card-btn" onClick={() => window.location.assign('http://localhost:3000/catalog?category=sale')}>{category}Перейти</Button>
      </Container>

      <Container>
        <Row>
          {filterSaleProducts().map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Img className="card-img"  src={`http://localhost:8080/${product.imagePath}`} />
                <div className={`card-img__sale card-img__sale--${salePercentage}%`}>
                    -{salePercentage}%
                </div>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    <strong>{product.price - (product.price * salePercentage / 100)} грн <span as="span" className="text-muted">{product.price} грн</span></strong>
                    </Card.Text>
              </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
    </div>
  );
};

export default SaleCategory;