function DwarfCard( { dwarfData, describeClickHandler } ) {

  const innerClickHandler = () => {
    console.log(`Dwarf ${dwarfData.name} has weapon ${dwarfData.weapon}`);
  }

  const wrapperHandler = () => {
    innerClickHandler();
    describeClickHandler();
  }

  return (
    <div className="dwarfCardContainer">
      <h3>{dwarfData.name} {dwarfData.nickname}</h3>
      <p>{dwarfData.age}</p>
      <p>{dwarfData.weapon}</p>
      <button onClick={wrapperHandler}>Describe</button>
    </div>
  )
}

export default DwarfCard;