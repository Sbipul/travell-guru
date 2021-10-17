import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
const SingleCards = (props) => {
    const all = props.cd
    const {name,img,des} = all

    const {viewHeading} = useAuth()

    return (
        <Col>
            <Card onClick={()=>viewHeading(name,des)} style={{borderRadius:'20px'}} className="carD">
              <Card.Img className="w-100 h-100 mx-auto" variant="top" src={img} />
              <Card.Text className="position-absolute pb-3 ps-2 fw-bold text-light fs-4 bottom-0">{name}</Card.Text>
            </Card>
          </Col>
    );
};

export default SingleCards;