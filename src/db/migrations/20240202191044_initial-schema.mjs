export const up = async (db) => {
  await db.schema.createTable("posts", (table) => {
    table.increments("id")
    table.text("name").notNullable()
  })
}

export const down = async (db) => {
  await db.schema.dropTable("posts")
}
