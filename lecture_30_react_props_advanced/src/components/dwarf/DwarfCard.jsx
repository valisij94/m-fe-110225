function DwarfCard( { dwarfData } ) {

  return (
    <div className="dwarfCardContainer">
      <h3>{dwarfData.name} {dwarfData.nickname}</h3>
      <p>{dwarfData.age}</p>
      <p>{dwarfData.weapon}</p>
    </div>
  )
}

export default DwarfCard;