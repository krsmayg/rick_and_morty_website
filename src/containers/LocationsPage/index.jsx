import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomeBoard from "../../components/UI/HomeBoard";
import LocationTable from "../../components/LocationTable";
import { fetchLocations,fetchFilterLocations } from "../../store/location/locationActions";
import {generateString} from "../../utils/filtering";
const LocationsPage = (props) => {
  const [page, setPage] = React.useState(1);
  const [filterObj, setFilterObj] = React.useState({
    name: "",
    type: "",
    dimension: "",
  });
  const nameHandler = (event) => {
    setFilterObj(filterObj,filterObj['name'] = event.target.value);
    props.fetchFilterLocations(page, generateString(filterObj));
  };
  const typeHandler = (event) => {
    setFilterObj(filterObj,filterObj['type'] = event.target.value);
    props.fetchFilterLocations(page, generateString(filterObj));

  };
  const dimensionHandler = (event) => {
    setFilterObj(filterObj,filterObj['dimension'] = event.target.value);
    props.fetchFilterLocations(page, generateString(filterObj));
  };
  useEffect(() => props.fetchLocations(1), []); // eslint-disable-line react-hooks/exhaustive-deps
  const handlePageChange = (event, value) => {
    console.log(value);
    setPage(value);
    props.fetchLocations(value);
  };
  return (
    <>
      <HomeBoard title="Locations" />
      <LocationTable
        locations={props.locations}
        handlePageChange={handlePageChange}
        pages={props.total}
        page={page}
        nameHandler = {nameHandler}
        typeHandler = {typeHandler}
        dimensionHandler = {dimensionHandler}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    total: state.locations.total,
  };
};
export default connect(mapStateToProps, { fetchLocations, fetchFilterLocations })(LocationsPage);
