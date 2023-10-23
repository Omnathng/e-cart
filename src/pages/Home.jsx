import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import useFetch from '../Hooks/useFetch'
import { addToWishlist } from '../redux/slices/wishlistSlice'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  const dispatch = useDispatch()
  console.log(data);
  return (
    <Row style={{marginTop:"100px"}}>
        {
          data?.length>0?data?.map((product,index)=>(
          <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded' style={{ width: '18rem',height:'29rem' }}>
           <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
           <Card.Body>
             <Card.Title>{product?.title}</Card.Title>
             <Card.Text>
              <p>{product?.description.slice(0,50)}...</p>
              <h5 className='fw-bolder'>${product?.price}</h5>
             </Card.Text>
             <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i className="fa-solid fa-heart text-danger fa-2x"></i></Button>
                <Button className='btn btn-light'><i className="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
             </div>
           </Card.Body>
        </Card>
            </Col>
          )): <p className='text-danger fw-bolder fs-4'>Nothing to display!!!</p>
        }
    </Row>
  )
}

export default Home