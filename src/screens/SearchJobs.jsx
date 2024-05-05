import React from "react";
import Filters from "../component/Filters";
import JobsContainer from "../component/JobsContainer";

const SearchJobs = () => {
  const [filter, setFilter] = React.useState({});
  return (
    <div>
      <Filters filter={filter} setFilter={setFilter} />
      <JobsContainer />
    </div>
  );
};

export default SearchJobs;
