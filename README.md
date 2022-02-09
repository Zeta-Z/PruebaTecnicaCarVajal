# Prueba Técnica - Agenda de Contactos!

Este proyecto fue realizado para la prueba tecnica Junior de la Empresa Carvajal, este proyecto es una agenda que permita a un usuario agregar nuevos contactos, editarlos, eliminarlos y hacer una busqueda de estos.

## Comenzando 🚀

Para comenzar debes de descargar el proyecto desde GitHub! para ello utiliza el siguiente comando para poder tener una copia de este en tu ordenador:

```
git clone https://github.com/Zeta-Z/PruebaTecnicaCarVajal.git
```

### Pre-requisitos 📋

Para poder utilizar este proyecto es necesario que tengas instalado lo siguiente:

Node: Es necesario debido a que este proyecto utiliza la infraestructura de Express
MySQL: La base de datos del proyecto es MySQL
JavaScript: Es el lenguaje en el cual esta desarrollado el proyecto
Un Entorno de Desarrollo Integrado: Por facilidad de manejo recomiendo Visual Studio Code.


Si deseas saber donde instalarlos puedes bajar un poco hasta la parte de "Construido Con".


### Instalación 🔧


Antes de empezar a instalar e iniciar el proyecto es necesario tener descargado todo lo mencionado en la parte de "Construido Con".

Para la instalación debe seguir los siguientes pasos:

1. Clonar el repositorio
2. Abrir dos ventanas de Visual Studio Code, en una de estas estara la Api y en la otra estara la parte del cliente
3. Abrir una terminal en ambas ventanas y ejecutar el comando

npm -i

Esto instalara todas las dependencias tanto en la parte del back como en la del front

4. Luego de este paso es necesario en el front utilizar el siguiente comando:

npm i react-scripts

5. Con esto listo es necesario crear la base de datos con el ORM de Sequelize, para esto debemos abrir el MySQL WorkBench y crear una conexion vacia con el nombre que usted desee, por ejemplo, "BaseDatosV1".
6. Ahora es necesario desde la parte del back utilizar el ORM de Sequelize para generar una base de datos que se enlace a la conexión creada en el paso anterior, para esto es necerario abrir la carpeta de "Config" y abrir el archivo "Config.js" en el encontraremos lo siguiente:

{
  "development": {
    "username": "root",
    "password": null,
    "database": "NombreBaseDatos",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "NombreBaseDatos",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "NombreBaseDatos",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

para realizar una conexión adecuada con el MySQL Workbench es necesario que en la parte de "password" usted coloque la clave que se le fue solicitada al momento de la instalación de dicho programa, esta contraseña debera colocarla en los 3 campos disponibles y la colocara entre comillas. por ejemplo: "clave123"

ademas de esto, en la parte de "database" debera de colocar entre comillas el nombre de la conexión creada anteriormente en MySQL WorkBench, que siguiendo el ejemplo presentado en el paso 5 seria "BaseDatosV1"

7. En la terminal utilizaremos el siguiente comando:

npx sequelize-cli db:create

npx sequelize-cli db:migrate

Esto migrara la base de datos ya creada y la enlazara a MySQL WorkBench

8. Para ejecutar los proyectos solo es necesario escribir en la terminal de cada uno

npm start

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Node](https://nodejs.org/es/) - Entorno en tiempo de Ejecución
* [VisualStudioCode](https://code.visualstudio.com) - Editor de Codigo Fuente
* [Express](https://expressjs.com/es/) - Infraestructura Utilizada
* [Sequelize](https://sequelize.org) - ORM
* [MySQL](https://www.mysql.com) - Sistema de gestión de Base de Datos
* [MySQLWorkBench](https://www.mysql.com/products/workbench/) - Herramienta visual de diseño de base de datos.



## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Luis Felipe Suescum Perea* - *Creador del Proyecto* - [Zeta-Z](https://github.com/Zeta-Z)

También puedes mirar su LinkedIn: https://www.linkedin.com/in/luis-felipe-suescum-ba1a41201


## Expresiones de Gratitud 🎁📢.

Gracias a la Empresa de Carvajal Por la oportunidad participar en la prueba tecnica Junior📢.




---
