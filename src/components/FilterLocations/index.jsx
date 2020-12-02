import React from "react";
import FilterPanelItem from "../UI/FilterPanelItem";
import FilterInputItem from "../UI/FilterInputItem";

const FilterLocations = (props) => {
  return (
    <div className="filter-panel">
      {/* <FilterPanelItem  title="Type" filterArray = {filters.species} {...props} /> */}
      <FilterInputItem searchLabel="Name" inputHander ={props.filterObjHandler}  />
      <FilterInputItem searchLabel="Type" inputHander = {props.filterObjHandler}  />
      <FilterInputItem searchLabel="Dimension" inputHander = {props.filterObjHandler}  />
    </div>
  );
};

export default FilterLocations;
