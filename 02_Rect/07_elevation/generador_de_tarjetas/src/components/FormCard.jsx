import { useState } from "react";

const FormCard = ({addingBoxes}) =>{


    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [color,setColor] = useState("#ffffff");
    const [border,setBorder] = useState("Solid");
    

    const addBox = (e)=> {
        e.preventDefault();
        addingBoxes(title,content,color,border);
        setTitle("");
        setContent("");
        setColor("#ffffff");
        setBorder("Solid");
    }

    return(
        <div className="card text-white bg-dark mb-3">
            <form onSubmit={addBox}>
            <div className="form-group">
                <input className="form-control" type="text" id="title" name="title" placeholder="Title" autoComplete="title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>
            <div className="form-group">
            <br></br>
                <textarea className="form-control" id="content" name="content" rows="3" cols="50" placeholder=" Content" value={content} onChange={(e)=>setContent(e.target.value)} required/>
            </div>
            <div className="form-group">
            <br></br>
                <input className="form-control" type="color" id="color" name="color" value={color} onChange={(e)=>setColor(e.target.value)} />
            </div>
            <div className="form-group">
            <br></br>
                <select className="form-control" id="border" name="border" value={border} onChange={(e) => setBorder(e.target.value)}>
                    <option value="solid">Solid</option>
                    <option value="hidden">Hidden</option>
                    <option value="dotted">Dotted</option>
                    <option value="dashed">Dashed</option>
                    <option value="double">Double</option>
                    <option value="groove">Groove</option>
                    <option value="ridge">Ridge</option>
                    <option value="inset">Inset</option>
                    <option value="outset">Outset</option>
                </select>
            </div>
            <br></br>
                <button type="submit" className="btn btn-primary">Create Box</button>
            </form>
        </div>
    );

}

export default FormCard;