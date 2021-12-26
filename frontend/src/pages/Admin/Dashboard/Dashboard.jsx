import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import SidePanel from '../../../components/SidePanel/SidePanel';

const Dashboard = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
             <Button variant="primary" onClick={handleShow}>
             <i className="fas fa-bars"></i>
            </Button>
            <SidePanel show={show} setShow={setShow}/>
            
        </div>
    )
}

export default Dashboard
