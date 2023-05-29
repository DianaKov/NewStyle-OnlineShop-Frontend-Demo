import { useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import MyModal from "../../modal/modal";

import "./header.css"
import SearchForm from "../../searchForm/searchForm";

function Header() {
  
    const [isExpanded, setIsExpanded] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [showNavLinks, setShowNavLinks] = useState(true);
    const [showLogo, setShowLogo] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        setShowInput(false);
        setShowNavLinks(!showNavLinks);
        setShowLogo(!showLogo);
        setBackgroundColor(isExpanded ? "var(--header-background-color)" : "var(--active-header-background-color)");
        setIsMenuOpen(!isMenuOpen);
    };

    const [backgroundColor, setBackgroundColor] = useState("var(--header-background-color)");

  return (
    <Navbar style={{ backgroundColor }}>
      <Container>
      <Navbar.Toggle aria-controls="navbarMenu" onClick={handleToggle}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className={isMenuOpen ? 'icon-blue' : ''} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarMenu" className={isExpanded ? "show" : ""}>
          {showNavLinks && (
            <Nav className="d-none d-lg-flex">
              <Nav.Link href="/catalog?category=new_arrival">NEW</Nav.Link>
              <Nav.Link href="/catalog">КАТАЛОГ</Nav.Link>
              <Nav.Link href="/catalog?category=sale">СКИДКИ</Nav.Link>
            </Nav>
          )}
          {showLogo && <Navbar.Brand href="/">NEW STYLE</Navbar.Brand>}
          <Nav className={isExpanded ? "d-none" : "ms-auto"}>
            <SearchForm />
            <MyModal />
            <Nav.Link href="/favorites">
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
            <Nav.Link href="/shoppingCart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
          <Nav className={isExpanded ? "me-auto mb-2 mb-lg-0" : "d-none"}>
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

export default Header;