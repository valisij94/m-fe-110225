
function SimpleHeader( { headerText = 'Default header text', customStyles } ) {

  return <h1 style={customStyles} className="greenBackground">{headerText}</h1>;
}

export default SimpleHeader;