import { Router } from 'express'
import { helloWorldSchema } from '../helpers/validation.helper'
import { HelloWorldController } from '../controllers/hello.controller'
import type { Routes } from '../interfaces/routes.interface'

export class HelloWorldRoute implements Routes {
  public path = '/'
  public router = Router()
  public helloWorldController = new HelloWorldController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(this.path, helloWorldSchema, this.helloWorldController.greetUser)
  }
}
