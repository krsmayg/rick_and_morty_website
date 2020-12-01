import React from "react";
import FilterPanelItem from "../UI/FilterPanelItem";
import FilterInputItem from "../UI/FilterInputItem";

const FilterLocations = (props) => {
  return (
    <div className="filter-panel">
      {/* <FilterPanelItem  title="Type" filterArray = {filters.species} {...props} /> */}
      <FilterInputItem searchLabel="Name" inputHander ={props.nameHandler}  />
      <FilterInputItem searchLabel="Type" inputHander = {props.typeHandler}  />
      <FilterInputItem searchLabel="Dimension" inputHander = {props.dimensionHandler}  />
    </div>
  );
};

export default FilterLocations;
