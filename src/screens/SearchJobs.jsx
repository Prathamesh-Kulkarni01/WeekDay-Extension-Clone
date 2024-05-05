import React from "react";
import Filters from "../component/Filters";
import JobsContainer from "../component/JobsContainer";

const SearchJobs = () => {
  const [filter, setFilter] = React.useState({});
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    return () => {
      (async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
          limit: 100,
          offset: 0,
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body,
        };

        fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          requestOptions
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((res) => {
            console.log(res);
            setJobs(res?.jdList || []);
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      })();
    };
  }, []);
  return (
    <div>
      <Filters filter={filter} setFilter={setFilter} />
      <JobsContainer jobs={jobs} />
    </div>
  );
};

export default SearchJobs;
