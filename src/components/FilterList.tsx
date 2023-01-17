import { ChangeEvent, useState, useTransition } from "react";
import { Filters } from "./Filters";

export const FilterList = () => {
  const [filter, setFilter] = useState("");

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFilter(value);
  };

  return (
    <div>
      <h4>Filter list</h4>
      <input value={filter} onChange={handleInputChange} />
      <Filters filter={filter} />
    </div>
  );
};
