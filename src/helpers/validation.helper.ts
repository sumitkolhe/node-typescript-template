import { Joi, Modes, Segments, celebrate } from 'celebrate'

export const helloWorldSchema = celebrate(
  {
    [Segments.QUERY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  },
  { abortEarly: false },
  { mode: Modes.FULL }
)
