const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

// Esto activará nuestra declaración mongoose.connect para inicializar nuestra conexión de base de datos
require("./server/config/mongoose.config");

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// Aquí es donde importamos la función de rutas de los usuarios de nuestro archivo user.routes.js
const AllMyProductRoutes = require("./server/routes/form.routes");

AllMyProductRoutes(app);

app.listen(8000, () => console.log("El servidor está encendido en el puerto. 8000"));
