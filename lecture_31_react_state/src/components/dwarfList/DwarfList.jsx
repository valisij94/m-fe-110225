import DwarfCard from "../dwarf/DwarfCard";
import styles from './DwarfList.module.css';

function DwarfList( {listHeaderText = 'Dwarwes List', dwarwes = []} ) {

  return (
    <>
      <h4>{listHeaderText}</h4>
      {
        dwarwes && dwarwes.length > 0 ?
        <div className={styles.dwarwesListContainer}>
          { dwarwes.map( el => <DwarfCard key={el.name} dwarfData={el} />)}
        </div> :
        <h4>Empty dwarwes list!</h4>
      }
    </>
  );
}

export default DwarfList;