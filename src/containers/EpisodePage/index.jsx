import React, { useEffect } from "react";
import HomeBoard from "../../components/UI/HomeBoard";
import { connect } from "react-redux";
import {
  fetchEpisodes,
  fetchFilterEpisodes,
} from "../../store/episode/episodeActions";
import { generateString } from "../../utils/filtering";
import { deepEqual } from "../../utils/filtering";
import EpisodeTable from '../../components/EpisodeTable'
function EpisodePage(props) {
  const [page, setPage] = React.useState(1);
  const [filterObj, setFilterObj] = React.useState({
    name: "",
  });
  const [copyObj, setCopyObj] = React.useState({});

  useEffect(() => {
    props.fetchEpisodes(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCopyObj({ ...filterObj });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filterObjHandler = (event, type) => {
    setPage(1);
    setFilterObj(filterObj, (filterObj[type] = event.target.value));
    props.fetchFilterEpisodes(page, generateString(filterObj));
  };
  const handlePageChange = (event, value) => {
    setPage(() => value);
    deepEqual(filterObj, copyObj)
      ? props.fetchEpisodes(value)
      : props.fetchFilterEpisodes(value, generateString(filterObj));
  };
  return (
    <>
      <HomeBoard title="Episodes" />
      <EpisodeTable
        episodes={props.episodes}
        handlePageChange={handlePageChange}
        pages={props.total}
        page={page}
        filterObjHandler={filterObjHandler}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    episodes: state.episodes.episodes,
    total: state.episodes.total,
  };
};
export default connect(mapStateToProps, { fetchFilterEpisodes, fetchEpisodes })(
  EpisodePage
);
