import { Formik, Form, Field, ErrorMessage } from "formik"
import { updateResource } from "@/web/services/apiClient"
import { useSession } from "@/web/components/SessionContext"

const EditProfilePage = () => {
  const { session } = useSession()

  if (!session || !session.user) {
    return <div className="text-center">Session non disponible</div>
  }

  const handleSubmit = async (values) => {
    const userData = {
      username: values.username
    }
    const userId = session.user.id

    await updateResource(["users", userId], userData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{ username: session.user.username || "" }}
        onSubmit={handleSubmit}>
        <Form className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <Field
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500 mt-2"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Update
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default EditProfilePage
