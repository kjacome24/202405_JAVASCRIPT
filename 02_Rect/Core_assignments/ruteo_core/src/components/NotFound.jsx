import { Link } from "react-router-dom";

const NotFound = ()=> {
    return (
        <> 
            <h2>URL not found.</h2>
            <Link to={`/home`}>
            <button className='btn btn-success'>Home</button>
            </Link>
        </>
    );

}

export default NotFound;