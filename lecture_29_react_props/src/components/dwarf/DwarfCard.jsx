function DwarfCard( props ) {

  return (
    <div className="dwarfCardContainer">
      <h3>{props.name} {props.nickname}</h3>
      <p>{props.age}</p>
      <p>{props.weapon}</p>
    </div>
  )
}

export default DwarfCard;