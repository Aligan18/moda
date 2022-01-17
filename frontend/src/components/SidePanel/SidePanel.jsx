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
          
          <li><Link to={routerPaths.ADMIN_PRODUCT_LIST}>Продукты</Link></li>
          <li><Link to={routerPaths.ADMIN_ORDER_LIST}>Заказы</Link></li>
          <li><Link to={routerPaths.ADMIN_USER_LIST}>Пользователи</Link></li>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
    )
}

export default SidePanel
