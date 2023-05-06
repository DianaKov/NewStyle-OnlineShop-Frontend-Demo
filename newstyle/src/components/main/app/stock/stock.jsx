import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import './stock.css'

function Stock() {
    return (
        <Container>
          <Row>
            <Col>
              <h2>ЛЕТНИЕ СКИДКИ -50%</h2>
              <p>Наша летняя распродажа уже заканчивается. Поспешите воспользоваться самыми горячими ценами.</p>
              <Button>Перейти</Button>
            </Col>
          </Row>
        </Container>
    );
}

export default Stock;