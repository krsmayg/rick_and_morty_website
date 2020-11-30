import React from "react";
import FilterPanelItem from "../UI/FilterPanelItem";
import {CharacterFilter} from "../../utils/character"
const FilterCharacters = () => {
  const filters =  new CharacterFilter();
  console.log(filters);
  return (
    <div className="filter-panel">
      <FilterPanelItem  title="Species" filterArray = {filters.species} />
      <FilterPanelItem  title="Status" filterArray = {filters.status} />
      <FilterPanelItem  title="Gender" filterArray = {filters.genders} />
    </div>
  );
};

export default FilterCharacters;
