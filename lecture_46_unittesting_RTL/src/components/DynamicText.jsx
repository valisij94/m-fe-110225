export default function DynamicText( {text = 'Dummy!'} ) {

  return (
    <div className='dynamicTextContainer'>
      {text}
    </div>
  )
}