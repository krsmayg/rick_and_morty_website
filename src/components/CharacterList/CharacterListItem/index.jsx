import React from 'react';
const CharacterListItem = (props) => {
  return ( 
     <div className = "character-list__item">
       <img src={props.character.image} alt={props.character.name}></img>
       <span className = "character-list__item__title">{props.character.name}</span>
     </div>
   );
}
 
export default CharacterListItem;