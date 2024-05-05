import React from "react";
import Filters from "../component/Filters";
import JobsContainer from "../component/JobsContainer";

const SearchJobs = () => {
  return (
    <div>
      <Filters />
      <JobsContainer />
    </div>
  );
};

export default SearchJobs;
