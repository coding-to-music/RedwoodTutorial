import BlogLayout from 'src/layouts/BlogLayout'
import { Form, Label, TextField, Submit } from '@redwoodjs/forms'

const ContactPage = () => {
  return (
    <BlogLayout>
      <Form>
        <Label name="name" />
        <TextField name="name" />
        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
