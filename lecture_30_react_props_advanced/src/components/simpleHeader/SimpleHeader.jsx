
function SimpleHeader( { headerText = 'Default header text', customStyles } ) {

  const clickHandler = () => {
    console.log(headerText);
  }

  return <h1
            style={customStyles}
            className="greenBackground"
            onClick={clickHandler}
          >
            {headerText}
          </h1>;
}

export default SimpleHeader;