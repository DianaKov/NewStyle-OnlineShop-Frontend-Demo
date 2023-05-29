import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form, FormGroup} from "react-bootstrap";
import { useLocation,  useNavigate } from 'react-router-dom';
import { salePercentage, colorMap } from '../../constants';

import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import NewHeader from '../../header/header';
import Footer from '../../footer/footer';
import ProductItem from "../productPage/productItem";

import './catalog.css'

const CatalogPage = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [size, setSize] = useState(null);
  const [color, setColor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      setCategory(categoryParam);
    }
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

  const handleCategoryChange = (category) => {
    setCategory(category);
    navigate(`/catalog?category=${category}`);
  };

  const filterProducts = () => {

    let filteredProducts = products;
  
    if (category === "sale") {
      filteredProducts = filteredProducts.filter((product) => product.sale === true);
    }
    else if (category === "new_arrival") {
      filteredProducts = filteredProducts.filter((product) => product.newArrival === true);
    }
    else if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
    
    if (color) {
      filteredProducts = filteredProducts.filter((product) => product.color === color);
    }

    if (size) {
      filteredProducts = filteredProducts.filter((product) => product.size === size);
    }

    return filteredProducts;
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const totalPages = Math.ceil(filterProducts().length / 9);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * 9;
    const endIndex = startIndex + 9;
    return filterProducts().slice(startIndex, endIndex);
  };

  return (
    <>
    <NewHeader/>
    <Breadcrumbs path={pathname} category={category}/>
    <Container className="catalogPage">
      <FormGroup className="catalogPage__title">
        <h1>Каталог</h1>
        <Form.Control
              as="select"
              value={size}
              onChange={handleSizeChange}
              className="my-select"
            >
              <option value="">Выбрать размер </option>
              <option value="XS">XS  </option>
              <option value="S">S  </option>
              <option value="M">M  </option>
              <option value="L">L  </option>
              <option value="XL">XL  </option>
              <option value="XLL">XLL  </option>
        </Form.Control>
        <Form.Control
              as="select"
              value={color}
              onChange={handleColorChange}
            >
              <option value="">Выбрать цвет</option>
              <option value="серый">Серый</option>
              <option value="черный">Черный</option>
              <option value="красный">Красный</option>
              <option value="голубой">Голубой</option>
              <option value="сиреневый">Сиреневый</option>
              <option value="желтый">Желтый</option>
              <option value="коралловый">Коралловый</option>
        </Form.Control>
      </FormGroup>
      <div className="filterProducts">
        <div className="filterProducts__left">
          <Button  variant="outline-primary" active={category === "new_arrival"} onClick={() => handleCategoryChange("new_arrival")}>
            NEW
          </Button>
          <Button variant="outline-primary" active={category === "Юбки"} onClick={() => handleCategoryChange("Юбки")}>
            Юбки
          </Button>
          <Button variant="outline-primary" active={category === "Платья"} onClick={() => handleCategoryChange("Платья")}>
            Платья
          </Button>
          <Button variant="outline-primary" active={category === "Брюки"} onClick={() => handleCategoryChange("Брюки")}>
            Брюки
          </Button>
          <Button variant="outline-primary" active={category === "Костюмы"} onClick={() => handleCategoryChange("Костюмы")}>
            Костюмы
          </Button>
          <Button variant="outline-primary" active={category === "sale"} onClick={() => handleCategoryChange("sale")}>
            Скидки
          </Button>
          <Button variant="outline-primary" active={category === ""} onClick={() => handleCategoryChange("")}>
            Посмотреть всё
          </Button>
        </div>
        <div className="filterProducts__right">
        <Row>
        {getPaginatedProducts().length === 0 ? (
          <p className="no-product">За данными критериями товара не найдено</p>
        ) : (
          getPaginatedProducts().map((product) => (
            <Col key={product.id} md={4}>
              <ProductItem
                product={product}
                salePercentage={salePercentage}
                colorMap={colorMap}
                showDescription={false}
                showButtons={false}
              />
            </Col>
          ))
        )}
        </Row>
        <div className="pagination">
              {totalPages > 0 &&
                Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <Button
                    key={pageNumber}
                    variant="outline-primary"
                    active={currentPage === pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </Button>
                ))}
            </div>
        </div>
      </div>
      </Container>
      <Footer />
      </>
      );
    }

export default CatalogPage;