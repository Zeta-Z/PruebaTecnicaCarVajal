import React from 'react';

const ContactList = ({contact, setContact, contacts, setListUpdated}) => {

    


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre,apellido,correo,telefonoFijo,celular,direccion} = contact
    const handleUpdate = id => {
        telefonoFijo = parseInt(telefonoFijo, 10)
        celular = parseInt(celular,10)
        //validación de los datos
        if (nombre === '' || apellido === '' || correo ==='' || telefonoFijo <=0 || celular <=0 || direccion ==='') {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contact)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        //reiniciando state de contacto
        setContact({
            nombre: '',
            apellido:'',
            correo:'',
            telefonoFijo:0,
            celular:0,
            direccion:''
        })
        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>CORREO</th>
                    <th>TELEFONOFIJO</th>
                    <th>CELULAR</th>
                    <th>DIRECCION</th>
                </tr>
            </thead>
            <tbody>
                {console.log(contacts[1])}
                
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.nombre}</td>
                        <td>{contact.apellido}</td>
                        <td>{contact.correo}</td>
                        <td>{contact.telefonoFijo}</td>
                        <td>{contact.celular}</td>
                        <td>{contact.direccion}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(contact.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(contact.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default ContactList;