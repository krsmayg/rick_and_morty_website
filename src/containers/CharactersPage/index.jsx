import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomeBoard from "../../components/UI/HomeBoard";
import { fetchAllCharacters } from "../../store/character/characterActions";
import CharacterList from "../../components/CharacterList";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function CharacterPage(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
    props.fetchAllCharacters(value);
  };
  useEffect(() => props.fetchAllCharacters(1), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <HomeBoard title="Characters" />
      <CharacterList characters={props.characters} />
      <div className={classes.root}>
        <Pagination count={props.total} page={page} onChange={handleChange} />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    characters: state.characters.characters,
    total: state.characters.total,
  };
};
export default connect(mapStateToProps, { fetchAllCharacters })(CharacterPage);
