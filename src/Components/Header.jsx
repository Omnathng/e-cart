import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container,Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  return (
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100 mb-5 z-1">
      <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none',color:"white",fontWeight:"bold"}} to={'/'}><i class="fa-solid fa-truck-fast"></i>E Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link className='btn border rounded'><Link style={{textDecoration:'none',color:"white",fontWeight:"bold"}} to={'/Cart'}><i class="fa-solid fa-cart-shopping text-warning me-2"></i>Cart <Badge bg="light" className='ms-2 rounded'>9</Badge></Link></Nav.Link>
            
            <Nav.Link className='btn border rounded ms-3'><Link style={{textDecoration:'none',color:"white",fontWeight:"bold"}} to={'/Wishlist'}> <i className="fa-solid fa-heart text-danger me-2"></i> Wishlist <Badge bg="light" className='ms-2 rounded'>{wishlist.length}</Badge></Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header