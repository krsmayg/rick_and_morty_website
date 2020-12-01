import React, { useEffect} from "react";
import { connect } from "react-redux";
import HomeBoard from "../../components/UI/HomeBoard";
import LocationTable from "../../components/LocationTable";
import { fetchLocations} from "../../store/location/locationActions";
const LocationsPage = (props) => {
const [page, setPage] = React.useState(1);
useEffect(() => props.fetchLocations(1), []); // eslint-disable-line react-hooks/exhaustive-deps
const handlePageChange = (event, value) => {
  console.log(value);
  setPage(value);
  props.fetchLocations(value);
};
  return (
    <>
      <HomeBoard title="Locations" />
      <LocationTable locations={props.locations} handlePageChange={handlePageChange} pages = {props.total} page={page}/>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    total: state.locations.total,
  };
};
export default connect(mapStateToProps, { fetchLocations })(LocationsPage);
