export const up = async (db) => {
  await db.schema.alterTable("posts", (table) => {
    table.text("description").notNullable()
  })
}

export const down = async (db) => {
  await db.schema.alterTable("posts", (table) => {
    table.dropColumn("description")
  })
}
