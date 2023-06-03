import { useState, useContext } from "react";
import { Toaster, toast } from 'sonner'
//Styls
import Style from "./FormEdit.module.css"

//Components
import { Card } from "./Card";

export const FormEdit = () => {
    const [newEtiqueta, setNewEtiqueta] = useState({
        nameEtiqueta:"",
        producto:"",
        lote:"",
    });

    const [etiqueta, setEtiqueta] = useState(undefined);

    const handleChange = (event) => {
        setNewEtiqueta({
            ...newEtiqueta,
            [event.target.name] : event.target.value,
        });
        console.log(newEtiqueta.lote.length);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newEtiqueta.lote.length < 6 && newEtiqueta.nameEtiqueta.length < 3) {
            toast.error( "Por favor chequea que la información sea correcta");
        } else {
            toast.success('Registro exitoso!')
            setEtiqueta(newEtiqueta);
        }
    };

    const opciones = [
        {
            id:"0",
            type: "text",
            data: "nameEtiqueta",
            text:"Nombre Etiqueta",
            examples: "Etiqueta Jamon"
        },
        {
            id:"1",
            type: "text",
            data: "producto",
            text:"Producto",
            examples: "Ej: P32J/1"
        },
        {
            id:"2",
            type: "text",
            data: "lote",
            text:"Lote",
            examples:"Ej:4575"
        }
    ]
    return (
        <div>
            <Toaster position="top-left" richColors/>
            <form className="formPost" onSubmit={handleSubmit} autoComplete="off">
                <article className={Style.caja}>
                    {opciones.map(({id, type, data, text}) => {
                                return (
                                    <div key={id} className={Style.inputcontainer}>
                                        <label htmlFor={data} className={Style.label}>{text.toUpperCase()}</label>
                                        <input type={type} onChange={handleChange} className={Style.textinput} id={data} name={data} required/>
                                    </div>
                                )
                            })}
                    <button className={Style.buttonPost} >⏏ Guardar</button>
                </article>
                {etiqueta != undefined && <Card Lote={ newEtiqueta.lote } producto={newEtiqueta.producto}/>}
        </form>
        </div>
    )
}