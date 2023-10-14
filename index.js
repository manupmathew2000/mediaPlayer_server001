const jsonServer = require('json-server')

const mpServer = jsonServer.create()

// set up path/route

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

// set up port number for running json server

const port = 4000 || process.env.PORT

// use middleware and router to your server
mpServer.use(middlewares)
mpServer.use(router)

// to listen server app to resolve request

mpServer.listen(port,()=>{
    console.log(`Media player server started at port :${port} and waiting for request`);
})