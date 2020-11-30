import React from "react";
import FilterPanelItem from "../UI/FilterPanelItem";
import {CharacterFilter} from "../../utils/character"
const FilterCharacters = (props) => {
  const filters =  new CharacterFilter();
  return (
    <div className="filter-panel">
      <FilterPanelItem  title="Species" filterArray = {filters.species} {...props} />
      <FilterPanelItem  title="Status" filterArray = {filters.status} {...props} />
      <FilterPanelItem  title="Gender" filterArray = {filters.genders} {...props} />
    </div>
  );
};

export default FilterCharacters;
