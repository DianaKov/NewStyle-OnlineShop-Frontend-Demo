import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faTimes, faBars, faSearch  } from "@fortawesome/free-solid-svg-icons";
import MyModal from "../../modal/modal";

import "./hederMobile.css"

function HeaderMobile() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar bg="light" expand="lg" className={`${ isMenuOpen ? "custom-bg-menu-open" : "custom-bg"}`}>
      <Container className={isMenuOpen ? 'menu-open' : ''}>
      <Navbar.Toggle aria-controls="navbarMenu" onClick={handleToggle}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className={isMenuOpen ? 'icon-blue' : ''}  />
        </Navbar.Toggle>
        <Navbar.Brand href="/" className={isMenuOpen ? 'text-blue' : ''}>NEW STYLE</Navbar.Brand>
        <Nav className="ms-row">
            <Nav.Link href="/favorites"><FontAwesomeIcon icon={faHeart} className={isMenuOpen ? 'icon-blue' : ''} /></Nav.Link>
            <Nav.Link href="/shoppingCart"><FontAwesomeIcon icon={faShoppingCart} className={isMenuOpen ? 'icon-blue' : ''} /></Nav.Link>
          </Nav>
          </Container>
          <Container className="new-backgraund">  
        <Navbar.Collapse id="navbarMenu" className={isExpanded ? "show" : ""}>
        
        <form>
          <div className="input-group border" style={{position: 'relative'}}>
            <input type="text" className="form-control" placeholder="Search..." required />
            <div className="input-group-append" style={{position: 'absolute', top: 0, right: 0}}>
              <button className="btn btn-secondary" type="submit" >
                <div className="s-circle" ></div>
                <FontAwesomeIcon  icon={faSearch} className="search-icon" />
              </button>
            </div>
          </div>
        </form>

          <Nav>
          <MyModal> </MyModal>
            <Nav.Link href="/catalog?category=new_arrival">NEW</Nav.Link>
            <Nav.Link href="/catalog">КАТАЛОГ</Nav.Link>
            <Nav.Link href="/catalog?category=sale">АКЦИИ</Nav.Link>
          </Nav>
          <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Link href="/about">О НАС</Nav.Link>
            <Nav.Link href="/payment">ОПЛАТА И ДОСТАВКА</Nav.Link>
            <Nav.Link href="/return-conditions">УСЛОВИЯ ВОЗВРАТА</Nav.Link>
            <Nav.Link href="/contact">КОНТАКТЫ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMobile;