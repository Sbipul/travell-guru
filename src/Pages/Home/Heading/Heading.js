import useAuth from '../../../Hooks/useAuth';
import './Heading.css'
const Heading = () => {

    const {name,des} = useAuth()
    
    return (
        <div style={{position:'relative',zIndex:'6'}} className="text-light pt-5">
            <h1 className="fw-bold fontStyle m-0 p-0" style={{fontSize:'80px'}}>{name ? name : 'My name'}</h1>
            <p>{des}</p>
            <button className="bg-warning rounded border-0 px-3 py-2">Book Now</button>
        </div>
    );
};

export default Heading;