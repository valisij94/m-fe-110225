function SimpleParagraph( props ) {

  return (
    <div>
      <p style={ {color: props.textColor} }>{props.textContent}</p>
    </div>
  )
}

export default SimpleParagraph;