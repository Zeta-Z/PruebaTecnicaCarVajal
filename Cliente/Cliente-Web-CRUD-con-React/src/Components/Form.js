import React from 'react';

const Form = ({contact, setContact}) => {

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    let{nombre,apellido,correo,telefonoFijo,celular,direccion} = contact

    const handleSubmit = () => {
        telefonoFijo = parseInt(telefonoFijo, 10)
        celular = parseInt(celular, 10)
        //validación de los datos
        if (nombre === '' || apellido === '' || correo ==='' || telefonoFijo <=0 || celular <=0 || direccion ==='' ) {
            alert('Todos los campos son obligatorios')
            return
        }

        
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contact)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setContact({
            nombre: '',
            apellido:'',
            correo:'',
            telefonoFijo:0,
            celular:0,
            direccion:''
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input value={apellido} name="apellido" onChange={handleChange} type="text" id="apellido" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo</label>
                <input value={correo}  name="correo" onChange={handleChange} type="text" id="correo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Telefono Fijo</label>
                <input value={telefonoFijo}  name="telefonoFijo" onChange={handleChange} type="number" id="telefonoFijo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cellphone" className="form-label">Celular</label>
                <input value={celular}  name="celular" onChange={handleChange} type="number" id="celular" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="addres" className="form-label">Direccion</label>
                <input value={direccion}  name="direccion" onChange={handleChange} type="text" id="direccion" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;