import React from 'react';
import { Container } from 'react-bootstrap';
import Heading from '../Heading/Heading';
import MyCarousel from '../MyCarousel/MyCarousel';

const Home = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center pt-5">
            <div className="row">
                <div className="col-12 col-md-5"><Heading/></div>
                <div className="col-12 col-md-7"><MyCarousel/></div>
            </div>
        </Container>
    );
};

export default Home;