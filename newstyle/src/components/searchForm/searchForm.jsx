import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./searchform.css"

function SearchForm() {

  const [showInput, setShowInput] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(true);
  const [products, setProducts] = useState([]);

  function searchProducts(query) {
    fetch(`http://localhost:8080/api/products/search?name=${query}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }  

  return (
    <>
    {showNavLinks && (
      <div className="position-relative d-flex align-items-center">
        <div className="d-grid">
          <Form className={(!showInput && "d-flex") || "d-none"}>
            <div
              className="search-input-container d-flex justify-content-center align-items-center"
              onClick={() => setShowInput(true)}
              style={{ marginRight: "35px" }}
            >
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
          </Form>
          <Form className={(showInput && "d-flex") || "d-none"}>
            <div className="search-input-container d-flex justify-content-center align-items-center">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FormControl  type="search" placeholder="Search..." className="search-input me-2" aria-label="Search" onChange={(e) => searchProducts(e.target.value)} />
              <FontAwesomeIcon icon={faTimes} onClick={() => setShowInput(false)} className="clear-icon"
                style={{ cursor: "pointer" }} />
            </div>
          </Form>
        </div>
      </div>
      )}
      <div className={`searchProductList ${showInput ? "" : "d-none"}`}>
        {products.map(product => (
          <Link key={product.id} to={`/catalog/${product.id}`}>
            {product.name} {product.size}
          </Link>
        ))}
      </div>
      </>
  )
}

export default SearchForm;