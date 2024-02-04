import { ValidationError, boolean, number, object, string } from "yup"

const validationSchema = object({
  security: object({
    session: object({
      cookie: object({
        key: string().required(),
        secure: boolean().required(),
      }).noUnknown(),
    }).noUnknown(),
  }).noUnknown(),
  pagination: object({
    limit: number().max(20).required(),
    maxDisplayed: number().max(5).required(),
  }).noUnknown(),
})
let config = null

try {
  config = validationSchema.validateSync(
    {
      security: {
        session: {
          cookie: {
            key: "sessionJsonWebToken",
            secure: process.env.NODE_ENV !== "development",
          },
        },
      },
      pagination: {
        limit: 5,
        maxDisplayed: 3,
      },
    },
    { abortEarly: false },
  )
} catch (err) {
  if (!(err instanceof ValidationError)) {
    throw err
  }

  process.exit(1)
}

export default config
