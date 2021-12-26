import React from 'react'
import {  Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { routerPaths } from '../../router/router';

const SidePanel = ({ show,setShow }) => {

    const handleClose = () => setShow(false);
    
  
    return (
        <>
     

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to={routerPaths.ADMIN_PRODUCT_LIST}>Продукты</Link>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )
}

export default SidePanel
