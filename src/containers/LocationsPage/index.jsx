import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomeBoard from "../../components/UI/HomeBoard";
import LocationTable from "../../components/LocationTable";
import {
  fetchLocations,
  fetchFilterLocations,
} from "../../store/location/locationActions";
import { generateString } from "../../utils/filtering";
import { deepEqual } from "../../utils/filtering";

const LocationsPage = (props) => {
  const [page, setPage] = React.useState(1);
  const [filterObj, setFilterObj] = React.useState({
    name: "",
    type: "",
    dimension: "",
  });
  const [copyObj, setCopyObj] = React.useState({});

  useEffect(() => {
    props.fetchLocations(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCopyObj({ ...filterObj });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filterObjHandler = (event, type) => {
    setPage(1);
    setFilterObj(filterObj, (filterObj[type] = event.target.value));
    props.fetchFilterLocations(page, generateString(filterObj));
  };
  const handlePageChange = (event, value) => {
    setPage(value);
    deepEqual(filterObj, copyObj)
      ? props.fetchLocations(page)
      : props.fetchFilterLocations(page, generateString(filterObj));
  };
  return (
    <>
      <HomeBoard title="Locations" />
      <LocationTable
        locations={props.locations}
        handlePageChange={handlePageChange}
        pages={props.total}
        page={page}
        filterObjHandler={filterObjHandler}
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
export default connect(mapStateToProps, {
  fetchLocations,
  fetchFilterLocations,
})(LocationsPage);
