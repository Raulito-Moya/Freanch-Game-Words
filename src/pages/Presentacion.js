import React from 'react'
import Info from '../components/Info'
import Menu from '../components/Menu'
import {Container,Row, Col} from 'react-bootstrap'

const Presentacion=()=>(
   
    <div>
   <Container className="justify-content-lg-center">
    <Row >
      <Col xs={12} sm={12} md={12} lg={12}>
        <Info />
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} >
        <Menu rute2='presentacion/aprenderpalabras' rute3='presentacion/historia' />  
       </Col>
     </Row>
    </Container>
    </div>
  
)

   
export default Presentacion


