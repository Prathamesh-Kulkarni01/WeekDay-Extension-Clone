import logo from "./logo.svg";
import "./App.css";
import TopBar from "./component/TopBar";
import Filters from "./component/Filters";
import JobsContainer from "./component/JobsContainer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Filters />
      <JobsContainer />
    </div>
  );
}

export default App;
