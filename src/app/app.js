import express from 'express'
import { loggerInRequest } from '../middlewares/logger.js'
import { apiRouter } from '../routers/apiRouter.js'
import { metodosPersonalizados } from '../middlewares/respuestasMejoradas.js'
import { passportInitialize } from '../middlewares/authentication.js'
import { cookies } from '../middlewares/cookie.js'
import { sesiones } from '../middlewares/sesiones.js'
import path from 'path';

export const app = express()

console.log(path.join('public', 'build', 'index.html'));
console.log('locura locura')
app.use(express.static(path.join('public', 'build')));

app.use(passportInitialize)

app.use(metodosPersonalizados)

// Cookies
app.use(cookies)
app.use(sesiones)

// LOGGER
app.use(loggerInRequest)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
app.use('/api', apiRouter)

// IMGS
app.use('/static', express.static('./static'))



