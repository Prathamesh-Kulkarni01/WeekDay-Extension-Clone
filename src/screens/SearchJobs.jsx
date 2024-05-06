import React from "react";
import Filters from "../component/Filters";
import JobsContainer from "../component/JobsContainer";
import { fetchPosts } from "../api/api";

const SearchJobs = () => {
  const [filter, setFilter] = React.useState({});
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  const filterData = (jobs = []) => {
    return jobs.filter((job) => {
      const passesRoleFilter =
        !filter?.roles?.length ||
        filter.roles.some(
          (roleFilter) =>
            roleFilter.label === job.jobRole &&
            roleFilter.category === "Engineering"
        );
      const passesExpFilter =
        !filter.exp || Number(filter.exp) >= Number(job.minExp);
      const passesTypeFilter =
        !filter.type?.length ||
        filter.type.includes("In-office") ||
        (filter.type &&
          job.location &&
          filter?.type?.some(
            (t) => t?.toLowerCase() === job?.location?.toLowerCase()
          ));
      let salary = filter.salary || "";
      if (typeof salary === "string" && salary.endsWith("L")) {
        salary = salary.slice(0, -1);
      }
      const passesSalaryFilter = !filter.salary || salary <= job.minJdSalary;
      const company =
        !filter.company || job.companyName.includes(filter.company);
      return (
        passesRoleFilter &&
        passesExpFilter &&
        passesTypeFilter &&
        passesSalaryFilter &&
        company
      );
    });
  };

  const onScroll = React.useCallback(async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      !loading
    ) {
      setLoading(true);
      const data = await fetchPosts(offset + 9);
      setOffset((of) => of + 9);
      setJobs((pre) => [...pre, ...(data || [])]);
      setLoading(false);
    }
  }, [loading, offset]);

  React.useEffect(() => {
    return () => {
      (async () => {
        setLoading(true);
        const data = await fetchPosts();
        setJobs(data || []);
        setLoading(false);
      })();
    };
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Filters filter={filter} setFilter={setFilter} />
      <JobsContainer loading={loading} jobs={filterData(jobs)} />
    </div>
  );
};

export default SearchJobs;
