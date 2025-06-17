function SimpleParagraph( {textColor, textContent, clickHandler} ) {

  return (
    <div>
      <p onClick={clickHandler} style={ {color: textColor} }>{textContent}</p>
    </div>
  )
}

export default SimpleParagraph;