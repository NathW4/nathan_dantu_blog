import { faker } from "@faker-js/faker"

export const seed = async (db) => {
  const categories = await db("categories")
    .insert(
      [...new Array(3)].map(() => ({
        name: faker.word.noun()
      }))
    )
    .returning("*")

  await db("users").insert(
    [...new Array(5)].map(() => ({
      email: faker.internet.email(),
      username: faker.internet.userName(),
      passwordHash: "hashed_password",
      passwordSalt: "salt"
    }))
  )

  await db("posts").insert(
    [...new Array(10)].map(() => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      categoryId:
        categories[faker.number.int({ min: 0, max: categories.length - 1 })].id
    }))
  )
}
