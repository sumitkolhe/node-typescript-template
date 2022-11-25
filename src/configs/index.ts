import { productionConfig } from './production.config'
import { devConfig } from './dev.config'

export const getConfig = () => {
  if (process.env.NODE_ENV === 'production') return productionConfig
  return devConfig
}
