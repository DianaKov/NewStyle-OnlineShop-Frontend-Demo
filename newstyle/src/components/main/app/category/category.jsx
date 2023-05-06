import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col} from "react-bootstrap";

import './category.css'

const ProductCategory = () => {
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
  

  const filterProducts = () => {
    if (category) {
      const filteredProducts = products.filter((product) => product.category === category);
      const uniqueProductsByCategory = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = product;
        }
        return acc;
      }, {});
      return Object.values(uniqueProductsByCategory);
    }
    const uniqueProductsByCategory = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = product;
      }
      return acc;
    }, {});
    return Object.values(uniqueProductsByCategory);
  };

  return (
    <div className="card">
      <h1 className="card-name">Категории</h1>
      <Row>
        {filterProducts().map((product) => (
          <Col key={product.id}>
            <Card>
              <Card.Img className="card-img"  src={`http://localhost:8080/${product.imagePath}`} />
                <Button className="card-btn" onClick={() => window.location.assign('http://localhost:3000/catalog?category=' + product.category)}>{product.category}</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductCategory;