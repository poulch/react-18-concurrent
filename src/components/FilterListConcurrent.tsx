import { ChangeEvent, useState, useTransition } from "react";
import { Filters } from "./Filters";

export const FilterListConcurrent = () => {
  const [filter, setFilter] = useState("");
  const [deferedFilter, setDeferedFilter] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFilter(value);
    console.log("Input chcnage", value);

    startTransition(() => {
      setDeferedFilter(value);
    });
  };

  return (
    <div>
      <h4>Filter list with concurrent</h4>
      <input value={filter} onChange={handleInputChange} />
      <Filters filter={deferedFilter} />
    </div>
  );
};
