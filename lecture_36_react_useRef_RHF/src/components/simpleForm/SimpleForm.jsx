export default function SimpleForm() {

  return (
    <form className='simpleForm'>
      <h2>Simple form to deal with refs and later with react-hook-form</h2>
      <input type='text' placeholder='Name'/>
      <input type='text' placeholder='Email'/>
      <input type='text' placeholder='Phone'/>
      <button>Submit</button>
    </form>
  )
}