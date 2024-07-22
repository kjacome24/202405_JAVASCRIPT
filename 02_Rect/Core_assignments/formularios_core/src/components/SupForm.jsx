import { useState } from "react";

const SupForm = (props)=> {
    const [name,setName] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const {add_sup} = props;
    const [success_message,setSuccess_message] = useState("");
    const [timeoutId, setTimeoutId] = useState(null); /*States to handle timeout */
    const [error_messages,setError_messages] = useState({name:"",lastname:"",email:"",password:"",password2:""})


    const add_sup_comp = (e)=>{
        e.preventDefault();
        const new_array = {...error_messages};
        name.length<4? new_array.name="The name should have at least 4 characters" : new_array.name="";   
        lastname.length<4? new_array.lastname="The last name should have at least 4 characters" : new_array.lastname="";
        email.length<11 || !email.includes("@")? new_array.email="Email should have at least 10 characters and @" : new_array.email="";
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const capitalLetterRegex = /[A-Z]/;
        password.length < 12 || !specialCharacterRegex.test(password) || !capitalLetterRegex.test(password)? new_array.password="The passwrod should have at least 12 characters with special characters and capital letters": new_array.password="";
        password2 != password? new_array.password2="THe passwords do not match" : new_array.password2="";
        setError_messages(new_array);

        //Here we avoid uploading the data of the student
        if (new_array.name || new_array.lastname || new_array.email || new_array.password || new_array.password2) {return;} 
        
        //Here we upload the data of the student 
        add_sup(name,lastname,email,password);
        setName("");
        setLastname("");
        setEmail("");
        setPassword("");
        setPassword2("");
        setSuccess_message(`You succesfully added the Sub ${name}`);

        // Clear any existing timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // Set a new timeout
        const newTimeoutId = setTimeout(() => {
            setSuccess_message("");
        }, 5000);
        setTimeoutId(newTimeoutId);
        /*End of time out block */
    }

    return(
        <div className="card text-white bg-dark mb-3">
            {success_message && <p style={{ color: 'green', fontWeight: "bold"}}>{success_message}</p>}
            <form onSubmit={add_sup_comp}>
            <div className="form-group">

                <label htmlFor="name">Name: </label>
                <input className="form-control" type="text" id="name" name="name" autoComplete="given-name" value={name} onChange={(e)=>setName(e.target.value)}/>
                {error_messages.name && <p style={{ color: 'red'}}>{error_messages.name}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name: </label>
                <input className="form-control" type="text" id="lastname" name="lastname" autoComplete="family-name" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                {error_messages.lastname && <p style={{ color: 'red'}}>{error_messages.lastname}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input className="form-control" type="text" id="email" name="email" autoComplete="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {error_messages.email && <p style={{ color: 'red'}}>{error_messages.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input className="form-control" type="password" id="password" name="password"  autoComplete="new-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {error_messages.password && <p style={{ color: 'red'}}>{error_messages.password}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password: </label>
                <input className="form-control" type="password" id="password2" name="password2"  autoComplete="new-password" value={password2} onChange={(e)=>setPassword2(e.target.value)} />
                {error_messages.password2 && <p style={{ color: 'red'}}>{error_messages.password2}</p>}
            </div>
            <br></br>
                <button type="submit" className="btn btn-primary">Crear Sup</button>
            </form>
        </div>
    );
}

export  default SupForm;