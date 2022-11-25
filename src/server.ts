import 'dotenv/config'
import { App } from './app'
import { HelloWorldRoute } from './routes/hello.route'

const app = new App([new HelloWorldRoute()])

app.listen()
