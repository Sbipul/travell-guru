
import {Row } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import SingleCards from '../SingleCards/SingleCards';
import './MyCarousel.css'

const MyCarousel = () => {

  const {details} = useFirebase()

  return (
    <div className="pt-5" style={{position:'relative',zIndex:'6'}}>
      <Row xs={1} md={3} className="g-4">
        {
          details.map(cd=> <SingleCards key={cd.id} cd={cd}></SingleCards>)
        }
      </Row>
    </div>
  );
};

export default MyCarousel;