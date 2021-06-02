'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { HealthController } from '../controllers'

const HealthRouter = new Express.Router()
const { get } = HealthController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

HealthRouter.use(extractHeaders)

HealthRouter.get('/', routeSanity, asyncWrapper(get))
// HealthRouter.get("/", function(req, res){
//     res.send("<h1>Hello, Welcome!</h1>");
// });

HealthRouter.use(setHeaders)

export default HealthRouter
