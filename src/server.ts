import dotenv from 'dotenv-safe'
import express, { Application } from 'express'
import cors from 'cors'
import { expressConfig } from '@src/config/express'
import { routes } from '@src/routes/routes'
import { HandleError } from '@src/middleware/errorHandler'
import { Logger } from '@src/utils/logger'
import { morganMiddleware } from '@src/middleware/morgan'

dotenv.config({ allowEmptyValues: true })
const app: Application = express()
const HOST: string = expressConfig.SERVER_HOST
const PORT: number = expressConfig.SERVER_PORT

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morganMiddleware)

app.use(routes)
app.use((err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) =>
  HandleError(err, req, res, next)
)

app.listen(PORT, HOST)
Logger.info(`Server listening on http://${HOST}:${PORT}`)
