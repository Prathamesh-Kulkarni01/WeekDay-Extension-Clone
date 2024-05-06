import "./App.css";
import TopBar from "./component/TopBar";
import React from "react";
import AppliedJobs from "./screens/AppliedJobs";
import SearchJobs from "./screens/SearchJobs";

function App() {
  const [tab, setTab] = React.useState(1);

  const handleChange = React.useCallback((event, newValue) => {
    setTab(newValue);
  }, []);

  return (
    <div className="App">
      <TopBar handleChange={handleChange} value={tab} />
      {tab ? <SearchJobs /> : <AppliedJobs />}
    </div>
  );
}

export default App;
