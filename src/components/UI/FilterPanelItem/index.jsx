import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from 'prop-types';
const FilterPanelItem = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterElement, setFilterElement] = React.useState(props.title);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFilter = (value) => {
    console.log(value);
    setFilterElement(value);
    props.filterObjHandler(props.title, value);
    handleClose();
  }
  const renderFilters = (
    props.filterArray.map(el => (
      <MenuItem onClick={() => handleFilter(el)} style={{fontSize: 14}} >{el}</MenuItem>
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
        {filterElement} <ExpandMoreIcon fontSize="default" />
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
