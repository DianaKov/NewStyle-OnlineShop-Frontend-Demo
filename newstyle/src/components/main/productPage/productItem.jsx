import React from 'react';
import { Card, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

const ProductItem = ({ product, salePercentage, colorMap, showDescription, showButtons, addToCart, addToFavorites, addedToCart, addedToFavorites, className, className2 }) => {
  return (
    <>
        <Card className="mb-4">
        <div className={`${className}`}>
              {product.sale ? (
                <>
                <Link to={`/catalog/${product.id}`}>
                  <Card.Img variant="top" src={`http://localhost:8080/${product.imagePath}`} />
                  <div className={`card-img__sale ${salePercentage}%`}>
                    -{salePercentage}%
                  </div>
                  </Link>
                </>
              ) : (
                <Link to={`/catalog/${product.id}`}>
                  <Card.Img variant="top" src={`http://localhost:8080/${product.imagePath}`} />
                </Link>
              )}
              </div>
              <div className={`${className2}`}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                  {product.sale ? (
                    <strong>{product.price - (product.price * salePercentage / 100)} грн <span as="span" className="text-muted">{product.price} грн</span></strong>
                  ) : (
                    <strong>{product.price} грн</strong>
                  )}
                  </Card.Text>
                  <Card.Title>Размер: {product.size}</Card.Title>
                  <Card.Title>
                    Цвет:
                    <span className="product-color" style={{ backgroundColor: colorMap[product.color] }}></span>
                  </Card.Title>
                </Card.Body>
        {showButtons && (
          <div>
            <Button className="mailingList-btn" onClick={addToCart} > {addedToCart ? "Добавлено ✓" : "В корзину"} </Button>
            <Button className="mailingList-btn" onClick={addToFavorites} > {addedToFavorites ? "Добавлено ✓" : "В избранное"}</Button>
          </div>
        )}
        {showDescription && <Card.Title>{product.description}</Card.Title>}
        </div>
      </Card>
      
    </>
  );
};

export default ProductItem;