import  { useForm } from 'react-hook-form';

export default function SimpleForm() {

  const { register } = useForm();

  return (
    <form className='simpleForm'>
      <h2>Simple form to deal with refs and later with react-hook-form</h2>
      <input type='text' placeholder='Name' {...register('name')}/>
      <input type='text' placeholder='Email' {...register('email')}/>
      <input type='text' placeholder='Phone' {...register('phone')}/>

      <button>Submit</button>
    </form>
  )
}