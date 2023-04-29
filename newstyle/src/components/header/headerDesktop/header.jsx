import { useState } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faSearch, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import MyModal from "../../modal/modal";

import "./header.css"

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
              <Nav.Link href="#">NEW</Nav.Link>
              <Nav.Link href="#">КАТАЛОГ</Nav.Link>
              <Nav.Link href="#">АКЦИИ</Nav.Link>
            </Nav>
          )}
          {showLogo && <Navbar.Brand href="#">NEW STYLE</Navbar.Brand>}
          <Nav className={isExpanded ? "d-none" : "ms-auto"}>
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
                    <FormControl  type="search" placeholder="Search..." className="search-input me-2" aria-label="Search" />
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShowInput(false)} className="clear-icon"
                      style={{ cursor: "pointer" }} />
                  </div>
                </Form>
              </div>
            </div>
            )}
            <MyModal />
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
          <Nav className={isExpanded ? "me-auto mb-2 mb-lg-0" : "d-none"}>
            <Nav.Link href="#">ОПЛАТА И ДОСТАВКА</Nav.Link>
            <Nav.Link href="#">УСЛОВИЯ ВОЗВРАТА</Nav.Link>
            <Nav.Link href="#">КОНТАКТЫ</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;