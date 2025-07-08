import  { useForm } from 'react-hook-form';

export default function SimpleForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const successSubmit = (data) => {
    console.log('Successfully submitted!', data)
  }

  console.log('Errors in form', errors)

  return (
    <form className='simpleForm' onSubmit={handleSubmit(successSubmit)}>
      <h2>Simple form to deal with refs and later with react-hook-form</h2>
      <input type='text' placeholder='Name' {
        ...register(
          'name',
          {
            required: 'Please enter your name!',
            validate: {
              noSpacesRule: (value) => !value.includes(' ') || 'Spaces are not allowed here!'
            }
          }
        )} />
      { errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}
      <input type='text' placeholder='Email' {
        ...register(
          'email',
          {
            required: "Please enter your email!",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: 'Invalid email!'
            }
          }
        )} />
      { errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
      <input
        type='text'
        placeholder='Phone'
        {...register('phone', {
          minLength: { value: 5, message: 'Too short!' },
          pattern: {
            value: /^0\d{9}$/,
            message: 'Incoorect phone number!'
          }
        } )} />
      { errors.phone && <p style={{color:'red'}}>{errors.phone.message}</p>}
      <button>Submit</button>
    </form>
  )
}