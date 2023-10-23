import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:'100%',height:'350px'}} className='d-flex flex-column justify-content-center align-items-center text-light bg-primary'>
    <div className="footer-div d-flex justify-content-evenly flex-wrap w-100">
      <div className="website" style={{width:'400px'}}>
        <h4><i class="fa-solid fa-truck-fast"></i> E Cart</h4>
        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident possimus libero iure rerum rem nihil</h6>
        <h6>Code Licensed MIT ,dose CC BY 3.0</h6>
        <p>Current Version v1.0.6</p>
      </div>
      <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        <Link to={'/Cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
        <Link to={'/Wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
      </div>
      <div className="guides links d-flex flex-column">
      <h4>Guides</h4>
        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>Bootstrap</Link>
        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}>Routing</Link>
      </div>
      <div className="content">
        <h4>Contact Us</h4>
        <div className="sub d-flex" >
          <input type="text" className='form-control' placeholder='Enter your Email Id'/>
          <button className='btn btn-light ms-4 ps-3 pe-3 pt-2'><i class="fa-sharp fa-solid fa-right-long text-primary"></i></button>
        </div>
        <div className='icon fs-4 d-flex justify-content-evenly mt-4'>
        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-envelope"></i></Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter"></i></Link>
        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></Link>
        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></Link>
        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-github"></i></Link>
        <Link to={'/watch-historys'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></Link>
        </div>
      </div>
      
    </div>
    <p>Copyright @ 2023 E Cart. Build with React</p>
  </div>
  )
}

export default Footer