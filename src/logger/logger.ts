import winston from 'winston'

export const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'telegraf-template' },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple(),
    winston.format.errors({ stack: true }),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'logs/exceptions.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  )
}
