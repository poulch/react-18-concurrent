import "./App.css";
import { FilterList } from "./components/FilterList";
import { FilterListConcurrent } from "./components/FilterListConcurrent";

export const App = () => {
  return (
    <div className="App">
      <FilterList />
      <FilterListConcurrent />
    </div>
  );
};
