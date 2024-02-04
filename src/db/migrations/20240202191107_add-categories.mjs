export const up = async (db) => {
  await db.schema.createTable("categories", (table) => {
    table.increments("id")
    table.text("name")
  })
  await db.schema.alterTable("posts", (table) => {
    table.integer("categoryId").notNullable()
    table.foreign("categoryId").references("id").inTable("categories")
  })
}

export const down = async (db) => {
  await db.schema.alterTable("posts", (table) => {
    table.dropColumn("categoryId")
  })
  await db.schema.dropTable("categories")
}
