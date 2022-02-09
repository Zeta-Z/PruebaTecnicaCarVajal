const express = require('express')
const routes = express.Router()
const db = require("./models");

routes.get('/', async(req, res)=>{
    const contactoss = await db.contactos.findAndCountAll();
      if (contactoss.count != 0) {
        res.status(200).json(contactoss);
      } else {
        res.status(404).send({
          error: "No hay registros en el sistema.",
        });
      }
})

routes.post('/', async(req, res)=>{
    const Contacto = await db.contactos.create({
        nombre: req.body.nombre,
        Apellido: req.body.apellido,
        correo: req.body.correo,
        telefonoFijo: req.body.telefonoFijo,
        celular: req.body.celular,
        direccion: req.body.direccion,
      });

      res.status(200).send({
        message: "Contacto creado con éxito.",
      });
})

routes.delete('/:id', async(req, res)=>{
    var id1 = req.params.id;
    const Eliminar = await db.contactos.findOne({
          where: { id: id1},
        });
        Eliminar.destroy();

        res.status(200).send({
          message: "Contacto Eliminado Exitosamente!",
        });
})

routes.put('/:id', async(req, res)=>{
    var id2= req.params.id;
    const registro = await db.contactos.update(
        {
          nombre: req.body.nombre,
          Apellido: req.body.apellido,
          correo: req.body.correo,
          telefonoFijo: req.body.telefonoFijo,
          celular: req.body.celular,
          direccion: req.body.direccion
        },
        {
          where: {
            id: id2,
          },
        }
      );
      res.status(200).send({
        message: "Usuario modificado con éxito."
      });
})

module.exports = routes