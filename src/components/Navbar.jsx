import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import imgLogo from '../assets/img/Coway-logo.png'

function OffcanvasExample() {
    return (
        <>
        {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} className=" px-2 bg-cyan-50 drop-shadow-lg sticky-top">
            <Container fluid>
                    <Link as={Link} to="/">
                    <img src={imgLogo} alt="Logo"/>
                    </Link>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Nav.Link as={Link} to="/"> <div className=" text-cyan-500">
                    Coway
                </div>
                </Nav.Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/">หน้าแรก</Nav.Link>
                    <NavDropdown
                        title="สินค้า"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <NavDropdown.Item as={Link} to="/Produc-One">เครื่องกรองน้ำดื่ม</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Produc-Two">
                        เครื่องฟอกอากาศ
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/contact">
                        ติดต่อ
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/about">เกี่ยวกับเรา</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </>
    );
}

export default OffcanvasExample;