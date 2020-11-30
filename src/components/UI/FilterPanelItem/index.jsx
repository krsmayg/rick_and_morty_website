import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from 'prop-types';
const FilterPanelItem = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderFilters = (
    props.filterArray.map(el => (
      <MenuItem onClick={handleClose} style={{fontSize: 14}} >{el}</MenuItem>
    ))
  )
  return (
    <div className="filter-panel__item">
      <Button
        variant="outlined"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{fontSize: 14}}
      >
        {props.title} <ExpandMoreIcon fontSize="default" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {renderFilters}
      </Menu>
    </div>
  );
};
FilterPanelItem.propTypes = {
  title: PropTypes.string.isRequired,
  filterArray: PropTypes.array
}
export default FilterPanelItem;
