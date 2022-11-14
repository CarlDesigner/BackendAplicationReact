//IMPORTAR DEPENDENCIAS
console.log("Cargando Configuración...")

const express = require('express')

//CARGAR CONFIGURACION APP WEB
const port = 3500;

//INICIALIZAR APLICACION WEB
console.log("Inicializar Aplicacón Web...")

const app = express()

//CONFIGURACION DE ROUTERS
console.log("Configurando Routers...")

app.get('/', (req, res) => {
    res.send('Holaaaa!')
})

app.use('/app', express.static('frontend'))

app.use('/static', express.static('./frontend/static'))






//INICIANDO SERVIDOR
console.log("Iniciando Servidor...")
app.listen(port, () => {
    console.log(`La app web esta escuhando en el puerto: ${port}`)
})