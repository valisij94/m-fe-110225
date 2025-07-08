import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  // используем хук useForm из библиотеки, и берем из него некоторые полезные свойства.
  // В частности, инструмент для регистрации инпутов в библиотеке (чтобы делегировать работу с ними библиотеке),
  // и обработчик события отправки (сабмита) формы
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // а это - наш обработчик сабмита формы (т.е. мы хотим выполнить эту логику при сабмите)
  const submissionHandler = data => console.log(data);

  return (
    <form className='registerForm' onSubmit={handleSubmit(submissionHandler)}>
      <input placeholder='Name' { ...register('name', {required: "Required field!"} ) } />
      { errors && errors.name && <p>{errors.name.message}</p>}

      <input placeholder='Min Length' { ...register('minLength', {minLength: { value: 3, message: "Too short!"}} ) } />
      { errors && errors.minLength && <p>{errors.minLength.message}</p>}
      <input placeholder='Max Length' { ...register('maxLength', {maxLength: {value: 5, message: 'Too long!'}} ) } />
      { errors && errors.maxLength && <p>{errors.maxLength.message}</p>}

      <input placeholder='Regexp' { ...register('regexp', {pattern: /^\d{10}$/} ) } />
      <input
        {...register("customValidation", {
          validate: (value, formValues) => value === 'Correct value'
        })}
      />
      <button type="submit">Register</button>
    </form>
  )
}