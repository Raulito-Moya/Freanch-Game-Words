import React from 'react'
import Info from '../components/Info'
import Menu from '../components/Menu'
import {Container,Row, Col} from 'react-bootstrap'

export const Presentacion=()=>{ 
   
  return(   
  
   <div>
   <Container className="justify-content-lg-center">
    <Row >
      <Col xs={12} sm={12} md={12} lg={12}>
        <Info />
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} >
        <Menu rute2='presentaation/learnwords' rute3='presentation/history' />  
       </Col>
     </Row>
    </Container>
    </div>
  )
}

   



