import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardContent: {
    // backgroundColor: '#2c3e50'
  }
});
const CharacterListItem = (props) => {
  const classes = useStyles();
  const [visible, setVisible] = React.useState("hidden");
  const handlePopUp = () => {
    visible === "hidden" ? setVisible("visible") : setVisible("hidden");
  };
  const renderPopUp = (
    <div className="character-list__popup" style={{ visibility: visible }}>
      <img src={props.character.image} alt={props.character.name}></img>
      <div className={classes.cardContent}>
        <Typography variant="h4">{props.character.name}</Typography>
        <Typography variant="h5">{props.character.species}</Typography>
        <Typography variant="h5">{props.character.gender}</Typography>
        <Typography variant="h5">{props.character.status}</Typography>
      </div>
      <div className="character-list__popup__cls-btn">
        <IconButton aria-label="delete" onClick={handlePopUp}>
          <CloseOutlined fontSize="large" style={{color: '#000'}} />
        </IconButton>
      </div>
    </div>
  );
  return (
    <>
      <div className="character-list__item" onClick={handlePopUp}>
        <img src={props.character.image} alt={props.character.name}></img>
        <span className="character-list__item__title">
          {props.character.name}
        </span>
        {renderPopUp}
      </div>
      
    </>
  );
};

export default CharacterListItem;
