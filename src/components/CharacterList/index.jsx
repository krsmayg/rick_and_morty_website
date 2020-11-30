import React from 'react';
import CharacterListItem from './CharacterListItem';

const CharacterList = (props) => {
  const renderCharacters = (
    props.characters.map(el => (
      <CharacterListItem  character={el} key={el.id}/>
    ))
  );
  return (
      <div className="character-list">
        {props.characters.length > 0 ? renderCharacters : <h1>Spinner....</h1>}
      </div>
    );
}
 
export default CharacterList;