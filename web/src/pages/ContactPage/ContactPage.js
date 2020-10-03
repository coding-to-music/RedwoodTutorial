import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
// import { Redirect } from '@redwoodjs/router'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
    console.log(data.name)
    console.log(data.email)
    console.log(data.message)
  }

  // input.error, textArea.error {
  //   border-color: red;
  //   color: red;
  // }

  // Label.error {
  //   color: red;
  // }

  return (
    <BlogLayout>
      <h1>Contact Page</h1>
      <p>Tell me about my things!</p>
      <Form onSubmit={onSubmit}>
        <Label name="name" />
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <Label name="email" />
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true, pattern: { value: /[^@]+@[^.]+\..+/ } }}
        />
        <Label name="message" />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
