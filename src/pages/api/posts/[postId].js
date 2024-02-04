import validate from "@/api/middlewares/validate"
import mw from "@/api/mw"
import {
  descriptionValidator,
  idValidator,
  nameValidator
} from "@/utils/validators"

const handle = mw({
  GET: [
    validate({
      query: {
        postId: idValidator.required()
      }
    }),
    async ({
      send,
      input: {
        query: { postId }
      },
      models: { PostModel }
    }) => {
      const post = await PostModel.query()
        .findById(postId)
        .withGraphFetched("category")
        .throwIfNotFound()

      send(post)
    }
  ],
  PATCH: [
    validate({
      query: {
        postId: idValidator.required()
      },
      body: {
        name: nameValidator,
        description: descriptionValidator
      }
    }),
    async ({
      send,
      input: {
        query: { postId },
        body
      },
      models: { PostModel }
    }) => {
      const updatedPost = await PostModel.query()
        .updateAndFetchById(postId, body)
        .withGraphFetched("category")
        .throwIfNotFound()

      send(updatedPost)
    }
  ],
  DELETE: [
    validate({
      query: {
        postId: idValidator.required()
      }
    }),
    async ({
      send,
      input: {
        query: { postId }
      },
      models: { PostModel }
    }) => {
      const post = await PostModel.query().findById(postId).throwIfNotFound()

      await post.$query().delete()

      send(post)
    }
  ]
})

export default handle
