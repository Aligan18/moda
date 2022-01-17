import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import classes from './CenteredModal.module.css'

const CenteredModal = ({setModalShow, CreateOrder, show, deliveryInfo, setDeliveryInfo, error}) => {
    const AdressHolder="Страна, город, улица, дом "


    const handlePhone=(event)=>{
        setDeliveryInfo({
                ...deliveryInfo,
                phone: event.target.value
            })
    }


    const handleAdress=(event)=>{
        setDeliveryInfo({
            ...deliveryInfo,
            adress: event.target.value
        })
    }


    return (
        <div>
              <Modal
                    show={show}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header >
                        <Modal.Title id="contained-modal-title-vcenter">
                        Информация о доставке 
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6> Номер телефона получателя </h6>
                        <input placeholder={'+7'} className={classes.input} onChange={(event)=>handlePhone(event)}/>
                        <h6 className={classes.error}>{error.phone}</h6>
                       <h6> Адрес получателя  </h6>
                       <input  placeholder={AdressHolder} className={classes.input} onChange={(event)=>handleAdress(event)}/>

                       <h6>Если Вы находитесь не в Алматы , в поле адрес нужно ввести :</h6>
                       <li>Полный Адрес почты </li>
                       <li>Индекс почты</li>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={CreateOrder}>Создать</Button>
                        <Button onClick={setModalShow}>Отмена</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CenteredModal
