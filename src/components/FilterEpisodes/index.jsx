import React from "react";
import FilterPanelItem from "../UI/FilterPanelItem";
import FilterInputItem from "../UI/FilterInputItem";

const FilterEpisodes = (props) => {
  return (
    <div className="filter-panel">
      {/* <FilterPanelItem  title="Type" filterArray = {filters.species} {...props} /> */}
      <FilterInputItem searchLabel="Name" inputHander ={props.filterObjHandler}  />

    </div>
  );
};

export default FilterEpisodes;
