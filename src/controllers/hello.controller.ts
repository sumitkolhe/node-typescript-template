import { HelloWorldService } from '../services/hello.service'
import { globalConstants } from '../constants'
import type { CustomResponse } from '../interfaces/response.interface'
import type { NextFunction, Request, Response } from 'express'

export class HelloWorldController {
  private helloWorldService: HelloWorldService

  constructor() {
    this.helloWorldService = new HelloWorldService()
  }

  public greetUser = (req: Request, res: Response<CustomResponse<string>>, next: NextFunction): void => {
    try {
      const { name } = req.query

      const response = this.helloWorldService.greetings(name as string)

      res.json({ status: globalConstants.status.success, message: null, data: response })
    } catch (error) {
      next(error)
    }
  }
}
