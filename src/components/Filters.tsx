import { memo, useEffect } from "react";
import { list } from "../list";
import { sleep, sleepPromised } from "../utils";

interface FiltersProps {
  filter: string;
}

export const Filters = memo(({ filter }: FiltersProps) => {
  const filtered = list.filter(({ title }) =>
    title.toLowerCase().includes(filter.toLowerCase())
  );
  console.log("Start rendering list: ", filter);

  sleep(200);

  return (
    <ul>
      {filtered.map((item) => (
        <li key={item.id}>{`${item.id} - ${item.title}`}</li>
      ))}
    </ul>
  );
});
