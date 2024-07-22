const Card_Sup = (props) =>{
    const {name, lastname, email} = props;

    return (
        <div className="card text-white bg-dark mb-3 ">
            <h4>Name: {name} {lastname}</h4>
            <p>Email: {email}</p>
        </div>
    );
}

export default Card_Sup; 