import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import ContactList from './Components/ContactList';
import Form from './Components/Form'

function App() {

  const [contact, setContact] = useState({
    nombre: '',
    apellido:'',
    correo:'',
    telefonoFijo:0,
    celular:0,
    direccion:''
  })

  const [contacts, setContacts] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getContacts = () => {
      
      fetch("http://localhost:9000/api", {
        method: "GET",
        headers: {},
      })
      
      .then((res) => res.json())
      .then((res) => Object.values(res) )
      .then((contacts) => setContacts(contacts[1]))
      .catch((error) => console.log(error));
    }
    getContacts() 
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Contact App'/>
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h2 style={{textAlign: 'center'}}>Contact List</h2>
            <ContactList contact={contact} setContact={setContact} contacts={contacts} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Contact Form</h2>
            <Form contact={contact} setContact={setContact}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
